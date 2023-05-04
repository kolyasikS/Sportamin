import React, {useEffect, useState} from 'react';
import IntroductionPage from "@/shared/ui/Titles/IntroductionPage/IntroductionPage";
import banner from "@assets/blogbanner.jpg";
import {SearchItems} from "@/widgets/api/Widgets";
import {filtrationCoursesItems, filtrationItems} from "@/app/Static Data/Filtration/Filtration";
import {useSelector} from "react-redux";
import {getBase64FromImage, getImageFromBase64} from "@/app/lib/features/image";
import {getCourses} from "@/app/lib/controllers/courseController";
import SearchedCourse from "@/shared/ui/SearchItems/SearchedCourse/SearchedCourse";
import erenJaeger from '@assets/eren.jpg';
import {getTrainers, getUsers} from "@/app/lib/controllers/userController";
import FiltrationCoursesHeader from "@/pages(notNEXT)/CoursesPage/FiltrationCoursesHeader";
const CoursesPage = () => {
    const [query, setQuery] = useState({})
    const [sort, setSort] = useState({})
    const filterState = useSelector(state => state.filterReducer);
    const [trainers, setTrainers] = useState([]);
    const fetchCourses = async (query, sort, limit, skip) => {
        if (filterState.price.min && filterState.price.max) {
            query.range = filterState.price;
        }
        return await getCourses(query, sort, limit, skip);
    }
    useEffect(() => {
        getUsers({'trainer.isTrainer': true})
            .then(res => {
                setTrainers(res.items);
            })
            .catch(err => console.log(err));
    }, []);
    const renderCourseItem = (item) => {
        let imageData = item.previewImage.data
            ? getImageFromBase64(item.previewImage.data)
            : item.previewImage;
        return <SearchedCourse key={item._id}
                               {...item}
                               trainer={trainers.find(trainer =>
                                   trainer._id === item.trainer)}
                               trainerID={item.trainer}
                               previewImage={imageData}/>
    }
    useEffect(() => {
        let languages = filterState.languages;
        let rating = filterState.minRating;

        let languagesMongoDB = null;
        if (languages.length) {
            languagesMongoDB = {languages: {$all: languages}};
        }
        let ratingMongoDB = null;
        if (rating) {
            ratingMongoDB = {'rating.avgValue': {$gte: 0}}; //testing
        }
        setQuery(prev => {
            if (!ratingMongoDB) {
                delete prev.rating;
            }
            if (!languagesMongoDB) {
                delete prev.languages;
            }
            return {...prev, ...ratingMongoDB, ...languagesMongoDB};
        });
    }, [filterState.minRating, filterState.languages.length])

    return (
        <main>
            <IntroductionPage bg={banner} title={'Courses'} height={450}/>
            <SearchItems fetchItems={fetchCourses} query={query} setQuery={setQuery}
                         sort={sort} filtrationItems={filtrationCoursesItems}
                         renderSearchedItem={renderCourseItem}>
                <FiltrationCoursesHeader setQuery={setQuery} setSort={setSort}/>
            </SearchItems>
        </main>
    );
};



export default CoursesPage;