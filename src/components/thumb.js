import React from 'react';

function Thumb(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt}></img>
            <h2>{props.h2} </h2>
        </div>
    )
}

export default Thumb