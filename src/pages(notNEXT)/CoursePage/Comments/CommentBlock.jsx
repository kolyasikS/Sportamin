import React from 'react';
import Comment from "@/pages(notNEXT)/CoursePage/Comments/Comment";

const CommentBlock = ({comments}) => {
    return (
        <div>
            <ul>{comments.map(comm =>
                <Comment key={comm._id} {...comm}/>
            )}</ul>
        </div>
    );
};

export default CommentBlock;