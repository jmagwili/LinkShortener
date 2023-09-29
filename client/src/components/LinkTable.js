import React from "react";

export const LinkTable = ({links}) => {

    const copyLink = async (link) =>{
        await navigator.clipboard.writeText(link)
    }

    let longLink = links.longLink
    const maxLength = 20

    if(longLink.length > maxLength){
        longLink = (`${longLink.substring(0,maxLength)}...`)
    }

    return(
        <div className="links">
            <a href={links.shortLink}>{longLink}{links.shortLink}</a>
            <button onClick={()=>copyLink(links.shortLink)}>Copy</button>
        </div>
    )
}