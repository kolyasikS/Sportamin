import React from 'react';
import Image from "next/image";

const Comment = ({trainerId, disliked,
                     liked, message,
                     publishedTime}) => {
    return (
        <div>
            <div>
                <Image src={''} alt={''}/>
            </div>
            <div>
                <div>
                    <h1>{trainerId}</h1>
                    <span>{publishedTime}</span>
                </div>
                <p>{message}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Comment;