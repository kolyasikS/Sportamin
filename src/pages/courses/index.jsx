import React from 'react';
import {CoursesPage} from "@/pages(notNEXT)/api/Components";

const Courses = () => {
    return (
        <CoursesPage/>
    );
};
export async function getServerSideProps() {
    return {
        props: {
        }
    };
}
export default Courses;