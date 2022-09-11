import React from 'react';
import  PropTypes from "prop-types";
import PageBase from  '../PageBase/PageBase';
import HeaderAccordion from '../CustomAccordion/HeaderAccordion'
import CustomModal from '../Modal/CustomModal';
import CustomToastMessage from '../../Components/CustomToastMessage/CustomToastMessage';

const style={
    operation_header_title: {
        marginBottom: '5px'
    },    
    operation_header_subtitle: {
        marginTop: '2px'        
    }
    
}

const handleDisplay = (display) =>{ 
    if(display===undefined)        
        return 'none'  
    else{
        return display? 'block': 'none'
    }
}

const handleDisplayModal = (displayModal) =>{ 
    if(displayModal===undefined)        
        return 'none'  
    else{
        return displayModal? 'block': 'none'
    }
}

const OperationSection = (props) =>{ 
    
    return(  
        <div>      
            <h2 style={style.operation_header_title}>{ props.title }</h2>
            <h5 style={style.operation_header_subtitle}>{ props.subTitle }</h5>
            <CustomModal displayModal={props.displayModal} onCloseDialog={props.onCloseDialog} buttonAdditional={ props.buttonAdditional }>
                <PageBase style={{display: handleDisplayModal(props.displayModal)}} id='operation-header'>
                    <HeaderAccordion  
                        disableAttachButton={ props.disableAttachButton }
                        disableExpandedButton={ props.disableExpandedButton } 
                        titleTooltip="Fixar" 
                        header={ props.titleHeader } 
                        onClick={ props.onClick }
                    >
                        { props.children }
                    </HeaderAccordion>
                </PageBase>
            </CustomModal>
            <PageBase style={{display: handleDisplay(props.display)}} id='operation-header'>
                <HeaderAccordion 
                    disableAttachButton={ props.disableAttachButton }
                    disableExpandedButton={ props.disableExpandedButton } 
                    titleTooltip="Desafixar" 
                    header={ props.titleHeader } 
                    onClick={ props.onClick }
                >
                    { props.children }
                </HeaderAccordion>                                        
            </PageBase>

            <CustomToastMessage 
                open={props.toastMessages?.open}
                message={props.toastMessages?.message}                 
                severity={props.toastMessages?.severity}                 
                handleClose={(event, reason) => { 
                    props.toastMessages.handleClose()
                    if (reason === 'clickaway') return;        
                    
                }} 
            />
        </div> 
    )
}

OperationSection.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    onCloseDialog: PropTypes.func,
    displayModal: PropTypes.bool,
    disableAttachButton: PropTypes.bool,
    disableExpandedButton: PropTypes.bool,
    titleHeader: PropTypes.string,
    onClick: PropTypes.func,
    buttonAdditional: PropTypes.object,
    toastMessages: PropTypes.shape({
        open: PropTypes.bool,
        message: PropTypes.string,
        severity:PropTypes.string,
        handleClose: PropTypes.func
    })
};
  
OperationSection.defaultProp = {
    title: "",
    subTitle: "",
    onCloseDialog: ()=>{},
    displayModal: false,
    disableAttachButton: false,
    disableExpandedButton: false,
    titleHeader: "",
    onClick: ()=>{},
    buttonAdditional: null,
    toastMessages: {
        open: false,
        message: "",
        severity: "",
        handleClose: ()=>{}
    }
};

export default React.memo(OperationSection);