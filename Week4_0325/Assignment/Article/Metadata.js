import React from 'react';
import styles from "./Style";

function Metadata(props) {
    return (
        <div style={props.style}>
            <div>{props.time}</div>
            <div style={styles.metadata_name}>{props.author}</div>
        </div>
    );
}

export default Metadata;