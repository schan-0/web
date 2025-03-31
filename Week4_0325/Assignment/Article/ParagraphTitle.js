import React from 'react';
import styles from "./Style";
import Metadata from './Metadata';

function ParagraphTitle(props) {
    return (
        <div style={styles.contentContainer}>
            <span style={styles.title}>{props.title}</span>
            <Metadata style={styles.metadata} author={props.author} time={props.time}/>
        </div>
    );
}

export default ParagraphTitle;