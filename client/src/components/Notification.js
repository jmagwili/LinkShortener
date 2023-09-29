import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

export const Notification = () =>{
    return(
        <div className='notif'>
            <AiFillCheckCircle className='check-icon'/>
            <span>Link Copied</span>
        </div>
    )
}