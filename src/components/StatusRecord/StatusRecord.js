import React from "react"

const StatusRecord = ({editing}) =>{    
    if(editing)
        return <div><i className="fas fa-edit"/> Alteração</div>
    else
        return <div><i className="fas fa-plus-circle"/> Inclusão</div>    
}

export default React.memo(StatusRecord)