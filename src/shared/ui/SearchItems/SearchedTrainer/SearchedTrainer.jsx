import React from 'react';
import Image from "next/image";
import Link from "next/link";

const SearchedTrainer = ({name, activity, description, rating,
                             amountStudents, amountCourses, src}) => {


    return (
        <li>
            <Link href={''}>{name}</Link>
            <h3>{activity}</h3>
            <div>
                <Link href={''}>
                    <Image src={src} alt={''} width={110}/>
                </Link>
                <div>
                    <div>
                        <Image src={''} alt={''}/>
                        <p>{}</p>
                    </div>
                    <div>
                        <Image src={''} alt={''}/>
                        <p>{}</p>
                    </div>
                    <div>
                        <Image src={''} alt={''}/>
                        <p>{}</p>
                    </div>
                </div>
            </div>
            <p>{description}</p>
        </li>
    );
};

export default SearchedTrainer;