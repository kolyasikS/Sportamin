import React from 'react';
import Link from "next/link";

const MyCoursesPage = () => {
    return (
        <main>
            <button>
                <Link href={'courses/create'}>Create</Link>
            </button>
        </main>
    );
};

export default MyCoursesPage;