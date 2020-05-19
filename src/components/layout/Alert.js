import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert-${alert.t}`}> {alert.msg} </div>
        ) 
    )
}
export default Alert;