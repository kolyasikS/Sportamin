import React from 'react';
import CourseHeader from "@/pages(notNEXT)/CoursePage/CourseHeader";
import CourseInner from "@/pages(notNEXT)/CoursePage/CourseInner";

const CoursePage = ({title, subtitle, price,
                        rating, students, trainer,
                        language, providedItems, requirements,
                        content, description}) => {
    return (
        <main>
            <CourseHeader title={title} subtitle={subtitle}
                          price={price} rating={rating}
                          students={students} trainer={trainer}
                          language={language}
            />
            <CourseInner providedItems={providedItems}
                         content={content} requirements={requirements}
                         description={description} trainer={trainer}/>
        </main>
    );
};

export default CoursePage;