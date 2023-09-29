import React from "react";

export const LinkTable = ({shortLink}) => {

    const copyLink = async (link) =>{
        await navigator.clipboard.writeText(link)
    }

    return(
        <div className="links">
            <a href={shortLink}>{shortLink}</a>
            <button onClick={()=>copyLink(shortLink)}>Copy</button>
        </div>
    )
}