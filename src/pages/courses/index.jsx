import React, {useEffect} from 'react';
import {CoursesPage} from "@/pages(notNEXT)/api/Components";
import {getBase64FromImage, getImageFromBase64} from "@/app/lib/features/image";
import {getCourses, updateCourse} from "@/app/lib/controllers/courseController";
import {getTrainers} from "@/app/lib/controllers/userController";
import {useDispatch} from "react-redux";
import {setAmountPages} from "@/app/lib/store/actions/filterActions";

const Courses = () => {
    return (
        <CoursesPage/>
    );
};
export async function getServerSideProps() {
    //await updateCourse(null, {previewImage: getBase64FromImage('public/media/images/eren.jpg')})
    return {
        props: {
        }
    };
}
export default Courses;