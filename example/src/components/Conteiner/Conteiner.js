import React from "react";
import  PropTypes from "prop-types";

const style={
    conteiner:{
        display: 'flex',
        // flexDirection: 'row',
        width: '100%',
        flexDirection: 'row!important'  
    },
    conteiner_item: {
        flex: '1',    
        padding: '3px'
    }
}

export const Conteiner = (props) =>{    
    return <div style={{...style.conteiner, ...props.style || {}}}  className={`${props?.className || ''}`}>
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
    return <div id={ props?.id } style={{...style.conteiner_item, ...props.style || {}}} className={`${props?.className || ''}`}>      
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
