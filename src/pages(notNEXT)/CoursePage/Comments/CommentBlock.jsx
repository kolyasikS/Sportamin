import React, {useState} from 'react';
import Comment from "@/pages(notNEXT)/CoursePage/Comments/Comment";
import {getUsers} from "@/app/lib/controllers/userController";
import withInitComment from "@/pages(notNEXT)/CoursePage/Comments/withInitComment";

const CommentBlockItem = withInitComment(Comment);
const CommentBlock = ({comments, postId, userId}) => {
    return (
        <div>
            <ul>{comments.map(comm =>
                <CommentBlockItem key={comm._id}
                                  postId={postId} initComm={comm} userId={userId}/>
                /*<CommentBlockItem key={comm._id}
                                  postId={postId} initComm={comm} userId={userId}>
                    <Comment {...comm} postId={postId} userId={userId}/>
                </CommentBlockItem>*/
            )}</ul>
        </div>
    );
};

export default CommentBlock;