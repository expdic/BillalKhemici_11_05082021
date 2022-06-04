import React, { useState } from "react";
import '../styles/gallerie.css';
import chevron from "../assets/chevron.png"


export default function Gallerie(props){

    const [index, setIndex] = useState(0);
    const tailleImg = () => {
        const monImg = document.querySelector('.gallerieDiv img');
        if(!monImg){
            return 0;
        }
        return monImg.width;
    }

    const onNext = () => {
        if(index === props.picture.length - 1){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const onPrev = () => {
        if(index === 0){
            setIndex(props.picture.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    if (props.picture.length === 1) {
        return (
            <div className="gallerie">
            <div className="gallerieDiv" style={{transform: `translateX(-${index * tailleImg()}px)`}}>
            {props.picture.map((picture) => < img className='gallerieImg' alt="img" src={picture} key={picture}/>)}
            </div>
            <div className={'index'}>{index + 1} / {props.picture.length}</div>
        </div>
    );} 

    return (
        <div className="gallerie">
            <div className="gallerieDiv" style={{transform: `translateX(-${index * tailleImg()}px)`}}>
            {props.picture.map((picture) => < img className='gallerieImg' alt="img" src={picture} key={picture}/>)}
            </div>
            <div className={'gallerieChevron'}>
                <img src={chevron} alt="chevron" className='chevron' onClick={onPrev}/>
                <img src={chevron} alt="chevron" className='chevronD' onClick={onNext}/>
            </div>
            <div className={'index'}>{index + 1} / {props.picture.length}</div>
        </div>
    );
}

