import React from 'react';

export const GifGridItem = ({id, title, url}) => {
    
    //console.log(url);
    
    return (

        <div className="animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
