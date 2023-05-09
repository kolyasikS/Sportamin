import React, {useEffect, useState} from 'react';
import CourseHeader from "@/pages(notNEXT)/CoursePage/CourseHeader";
import CourseInner from "@/pages(notNEXT)/CoursePage/CourseInner";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";
import Comments from "@/pages(notNEXT)/CoursePage/Comments/Comments";
import {getImageFromBase64} from "@/app/lib/features/image";

const CoursePage = ({title, subtitle, price,
                        rating, students, trainer,
                        language, providedItems, requirements,
                        content, description, _id}) => {
    const [courseStatus, setCourseStatus] = useState(null);
    const boughtCourses = useSelector((state) => state.authReducer?.user?.boughtCourses);
    const avatar = useSelector((state) => state.authReducer?.user?.avatar);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (boughtCourses) {
            let result = boughtCourses && boughtCourses.find(course => course.courseId === _id);
            setCourseStatus(result);
            setIsLoading(false);
        }
    }, [boughtCourses, courseStatus]);

    return (
        <main className={'bg-[#0d1117] pb-10'}>
            <div className={'relative'}>
                <CourseHeader title={title} subtitle={subtitle}
                              price={price} rating={rating} isLoading={isLoading}
                              students={students} trainer={trainer}
                              language={language} id={_id}
                              courseStatus={courseStatus}
                />
                <CourseInner providedItems={providedItems} isBought={courseStatus !== null && courseStatus !== undefined}
                             content={content} requirements={requirements}
                             description={description} trainer={trainer}
                />
            </div>
            {avatar && <Comments avatar={`data:image/jpg;base64,${getImageFromBase64(avatar)}`}
                      postId={_id}/>}
        </main>
    );
};

export default CoursePage;