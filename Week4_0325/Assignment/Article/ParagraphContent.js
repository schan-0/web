import React from 'react';
import styles from "./Style";

function ParagraphContent(props) {
    return (
        <div style={styles.contentContainer}>
            <div style={styles.commentText}>{props.content}</div>
        </div>
    );
}

export default ParagraphContent;