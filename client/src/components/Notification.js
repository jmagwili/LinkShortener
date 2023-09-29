import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

export const Notification = ({className}) =>{
    
    return(
        <div className={`notif ${className}`}>
            <AiFillCheckCircle className='check-icon'/>
            <span>Link Copied</span>
        </div>
    )
}