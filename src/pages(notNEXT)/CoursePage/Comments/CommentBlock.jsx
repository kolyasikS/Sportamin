import React from 'react';
import Comment from "@/pages(notNEXT)/CoursePage/Comments/Comment";
import withInitComment from "@/pages(notNEXT)/CoursePage/Comments/withInitComment";

const CommentBlockItem = withInitComment(Comment);
const CommentBlock = ({comments, postId, userId, deleteComment}) => {
    return (
        <div>
            <ul>{comments.map(comm =>
                <CommentBlockItem key={comm._id} deleteInitComment={deleteComment}
                                  postId={postId} initComm={comm} userId={userId}/>
            )}</ul>
        </div>
    );
};

export default CommentBlock;