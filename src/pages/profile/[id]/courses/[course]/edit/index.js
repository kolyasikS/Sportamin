import React from 'react';
import {CreateCoursePage} from "@/pages(notNEXT)/api/Components";
import {getCourses} from "@/app/lib/controllers/courseController";

const EditCourse = ({course}) => {
    return (
        <CreateCoursePage course={course}/>
    );
};

export async function getServerSideProps(context) {
    const result = await getCourses({id: context.query.course});
    const course = result[0];
    return {
        props: {
            course
        }
    }
}

export default EditCourse;