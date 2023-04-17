import React from 'react';
import {CoursesPage} from "@/pages(notNEXT)/api/Components";
import {getBase64FromImage, getImageFromBase64} from "@/app/lib/features/image";
import {getCourses, updateCourse} from "@/app/lib/controllers/courseController";
import {getTrainers} from "@/app/lib/controllers/userController";

const Courses = () => {
    return (
        <CoursesPage/>
    );
};
export async function getServerSideProps() {
    return {
        props: { name: 'asd' }
    };
}
export default Courses;