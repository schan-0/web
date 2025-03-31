import React from 'react';
import Paragraph from "./Paragraph";
import contents from "./Contents.json";

function Article(props) {
    return (
        <div>
            {contents.map((content, key) => {
                return (
                        <Paragraph title={content.title} content={content.content} author={content.author} time={content.time} />
                );
            })}
        </div>
    );
}

export default Article;