import React from 'react';
import styles from "./Style";
import ParagraphTitle from './ParagraphTitle';
import ParagraphContent from './ParagraphContent';

function Paragraph(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.contentContainer}>
                <ParagraphTitle title={props.title} time={props.time} author={props.author}/>
                <ParagraphContent content={props.content} />
            </div>
        </div>
    );
}

export default Paragraph;