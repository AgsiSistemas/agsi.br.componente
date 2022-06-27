import React from 'react';
import styles from './pageBase.module.css';

const PageBase = (props) => {
    return(
        <div id={props.id} style={props.style} className={ styles.page_base_content }>
            {props.header!==undefined &&
                <div className={`${styles.page_base_header} ${styles.agsi_theme_1}`}>
                    <label>{ props.header }</label>
                </div>
            }
            { props.children }            
        </div>
    )
}

export default React.memo(PageBase)