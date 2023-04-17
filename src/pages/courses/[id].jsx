import React from 'react';
import {useRouter} from "next/router";

const Course = () => {
    const router = useRouter();
    return (
        <div>
            <h1>{router.route}</h1>
        </div>
    );
};

    export default Course;