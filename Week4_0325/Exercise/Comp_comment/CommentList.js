import React from "react";
import Comment from "./Comment";
import comments from "./contents.json";


export default function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
// export default CommentList
