import React from 'react';
import {MyCoursesPage} from "@/pages(notNEXT)/api/Components";
import {getCourses} from "@/app/lib/controllers/courseController";
import {useSelector} from "react-redux";

const Courses = ({courses, trainerID}) => {
    const trainer = useSelector(state => state.authReducer.user);
    console.log(trainer);
    return (
        <MyCoursesPage courses={courses} trainer={trainer}
                       trainerID={trainerID}/>
    );
};

export async function getServerSideProps(context) {
    const courses = await getCourses({trainer: context.query.id});
    return {
        props: {
            courses,
            trainerID: context.query.id
        }
    }
}

export default Courses;