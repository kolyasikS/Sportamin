import React from 'react';
import {useRouter} from "next/router";
import CoursePage from "@/pages(notNEXT)/CoursePage/CoursePage";
import {getCourses} from "@/app/lib/controllers/courseController";
import {getTrainers} from "@/app/lib/controllers/userController";

const Course = ({course, trainer}) => {
    return (
        <CoursePage {...course} trainer={trainer}/>
    );
};

export async function getServerSideProps(context) {
    let id = context.query.id;
    let course;
    await getCourses({id})
        .then(res => {
            if (res && res.length) {
                course = res[0];
            }
        })
        .catch(err => {
            console.log(err);
        });

    let trainer;
    await getTrainers({_id: course.trainer})
        .then(res => {
            if (res && res.length) {
                trainer = res[0];
            }
        })
        .catch(err => {
            console.log(err);
        });
    return {
        props: {
            course,
            trainer
        }, // will be passed to the page component as props
    }
}
export default Course;