import React from 'react';
import CoursePage from "@/pages(notNEXT)/CoursePage/CoursePage";
import {getCourses} from "@/app/lib/controllers/courseController";
import {getUsers} from "@/app/lib/controllers/userController";
import Head from "next/head";

const Course = ({course, trainer}) => {
    return (
        <>
            <Head>
                <title>Course</title>
            </Head>
            <CoursePage {...course} trainer={trainer}/>
        </>
    );
};

export async function getServerSideProps(context) {
    let id = context.query.id;
    let course;
    await getCourses({id})
        .then(res => {
            if (res && res.items.length) {
                course = res.items[0];
            }
        })
        .catch(err => {
            console.log(err);
        });

    let trainer;
    await getUsers({_id: course.trainer, 'trainer.isTrainer': true})
        .then(res => {
            if (res && res.items.length) {
                trainer = res.items[0];
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