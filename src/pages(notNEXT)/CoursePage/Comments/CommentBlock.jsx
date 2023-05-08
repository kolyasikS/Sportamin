import React from 'react';
import Comment from "@/pages(notNEXT)/CoursePage/Comments/Comment";
import CommentBlockItem from "@/pages(notNEXT)/CoursePage/Comments/CommentBlockItem";

const CommentBlock = ({comments, postId, setIsLoading}) => {
    console.log(comments);
    return (
        <div>
            <ul>{comments.map(comm =>
                <CommentBlockItem key={comm._id} setIsLoading={setIsLoading}
                                  postId={postId} initId={comm._id}>
                    <Comment {...comm} postId={postId}/>
                </CommentBlockItem>
            )}</ul>
        </div>
    );
};

export default CommentBlock;