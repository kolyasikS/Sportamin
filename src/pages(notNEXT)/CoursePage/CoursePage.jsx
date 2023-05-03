import React, {useEffect, useState} from 'react';
import CourseHeader from "@/pages(notNEXT)/CoursePage/CourseHeader";
import CourseInner from "@/pages(notNEXT)/CoursePage/CourseInner";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoading} from "@/app/lib/store/actions/sessionActions";

const CoursePage = ({title, subtitle, price,
                        rating, students, trainer,
                        language, providedItems, requirements,
                        content, description, _id}) => {
    const [courseStatus, setCourseStatus] = useState(null);
    const boughtCourses = useSelector((state) => state.authReducer?.user?.boughtCourses);
    const user = useSelector((state) => state.authReducer?.user);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if ((courseStatus === null || courseStatus === undefined) && boughtCourses) {
            setCourseStatus(boughtCourses && boughtCourses.find(course => course.courseId === _id));
        } else if (courseStatus !== null && courseStatus !== undefined) {
            setIsLoading(false);
        }
    }, [boughtCourses]);
    return (
        <main>
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
        </main>
    );
};

export default CoursePage;