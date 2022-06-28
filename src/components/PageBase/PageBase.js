import React from 'react';

const style={
    page_base_content:{    
        marginBottom: '20px',
        padding: '5px 5px 5px 5px',
        backgroundColor: 'white'    
    },
    page_base_header:{
        color:'white',
        padding: '10px 10px 10px 15px',
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold',
        borderRadius: '2px',
        backgroundColor: 'rgb(236, 245, 250)!important'
    },    
    agsi_theme_1:{
        backgroundColor: 'rgb(236, 245, 250)!important'
    }
}

const PageBase = (props) => {
    return(
        <div 
            id={props.id} 
            // style={props.style} 
            style={ style.page_base_content }
        >
            {props.header!==undefined &&
                <div 
                style={style.page_base_header}>
                    <label>{ props.header }</label>
                </div>
            }
            { props.children }            
        </div>
    )
}

export default React.memo(PageBase)