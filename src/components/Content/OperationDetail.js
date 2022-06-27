import React from "react";
import PageBase from '../../Components/PageBase/PageBase';

const OperationDetail = (props) =>{
    return( 
        <PageBase>
            { props.children }
        </PageBase>
    )
}

export default React.memo(OperationDetail)