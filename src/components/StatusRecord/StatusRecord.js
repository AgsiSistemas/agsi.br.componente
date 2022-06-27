import React from "react"

const StatusRecord = ({editing}) =>{    
    if(editing)
        return <><i className="fas fa-edit"/> Alteração</>
    else
        return <><i className="fas fa-plus-circle"/> Inclusão</>    
}

export default React.memo(StatusRecord)