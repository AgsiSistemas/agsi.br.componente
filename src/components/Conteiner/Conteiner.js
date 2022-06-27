import React from "react";
import  PropTypes from "prop-types";
import styles from './conteiner.module.scss';

export const Conteiner = (props) =>{
    return <div className={ styles.conteiner }>
        { props?.children }
    </div>
}


Conteiner.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object
};
  
Conteiner.defaultProp = {
    className: "",
    children: {}
};


export const ConteinerItem = (props) =>{
    return <div id={ props?.id } className={` ${styles.conteiner_item} ${styles.conteiner_item} `}> 
     {/* {`Conteiner-item ${props?.className || ''}`} > */}
        { props.children }
    </div>
}

ConteinerItem.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.object
};
  
ConteinerItem.defaultProp = {
    className: "",
    children: {}
};
