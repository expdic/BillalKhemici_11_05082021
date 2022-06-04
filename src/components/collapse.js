import React from 'react';
import '../styles/annonces.css';
import Chevron from '../assets/chevron.png'
import { useState } from 'react';

function Collapse(props) {
    const [toggleState, setToggleState] = useState(false);
    const [toggleStateEquipement, setToggleStatEquipement] = useState(false);

    const toggleFonction = () => {
        setToggleState(!toggleState)
    }

    const toggleFonctionEquipement = () => {
        setToggleStatEquipement(!toggleStateEquipement)

    }

    
    let toggledImg;
    let toggledDiv; 

    let toggledImgEquipement;
    let toggledDivEquipement;

    if (!toggleState) {
        toggledImg = <p>
            Description <img onClick={toggleFonction} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if(toggleState){
        toggledImg =<p> Description <img onClick={toggleFonction} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDiv = <div>
            {props.description}
        </div>
    }

    if (!toggleStateEquipement) {
        toggledImgEquipement = <p>
            Equipement <img onClick={toggleFonctionEquipement} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if (toggleStateEquipement){
        toggledImgEquipement =<p> Equipement<img onClick={toggleFonctionEquipement} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDivEquipement = <div> {props.equipments.map((equipment)=> <span>{equipment}</span>)}
        </div>
        
    }


    const [toggleStateF, setToggleStateF] = useState(false);
    const [toggleStateRespect, setToggleStateRespect] = useState(false);
    const [toggleStateResponsabilite, setToggleStateResponsabilite] = useState(false);
    const [toggleStateService, setToggleStateService] = useState(false);

    const toggleFonctionF = () => {
        setToggleStateF(!toggleStateF)
    }

    const toggleFonctionRespect = () => {
        setToggleStateRespect(!toggleStateRespect)

    }

    const toggleFonctionService = () => {
        setToggleStateService(!toggleStateService)

    }

    const toggleFonctionResponsabilite = () => {
        setToggleStateResponsabilite(!toggleStateResponsabilite)

    }

    let toggledImgF;
    let toggledDivF; 

    let toggledImgRespect;
    let toggledDivRespect;

    let toggledImgService;
    let toggledDivService;

    let toggledImgResponsabilite;
    let toggledDivResponsabilite;

    if (!toggleStateF) {
        toggledImgF = <p>
            Fiabilité <img onClick={toggleFonctionF} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if(toggleStateF){
        toggledImgF =<p style={{marginRight:"16rem"}}> Fiabilité <img onClick={toggleFonctionF} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDivF = <div>
                        <p>
                            Les annonces postées sur Kasa garantissent une fiabilité totale.
                            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées
                            par nos équipes.
                        </p>
        </div>
    }

     if (!toggleStateRespect) {
        toggledImgRespect = <p>
            Respect <img onClick={toggleFonctionRespect} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if (toggleStateRespect){
        toggledImgRespect =<p style={{ marginRight: "16rem" }}> Respect<img onClick={toggleFonctionRespect} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDivRespect = <div>
                        <p>
                            La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
        </div>
        
    }

     if (!toggleStateService) {
        toggledImgService = <p>
            Service <img onClick={toggleFonctionService} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if (toggleStateService){
        toggledImgService =<p style={{ marginRight: "16rem" }}> Service<img onClick={toggleFonctionService} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDivService = <div>
                        <p>
                            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>
        </div>
        
    }

     if (!toggleStateResponsabilite) {
        toggledImgResponsabilite = <p>
            Responsabilite <img onClick={toggleFonctionResponsabilite} style={{ transform: 'rotate(270deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        
    }
        
    else if (toggleStateResponsabilite){
        toggledImgResponsabilite =<p style={{ marginRight: "16rem" }}> Responsabilite<img onClick={toggleFonctionResponsabilite} style={{ transform: 'rotate(90deg)' }} src={Chevron} alt='chevron'></img>
        </p>
        toggledDivResponsabilite = <div>
                        <p>
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                            correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                            cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur
                            la sécurité domestique pour nos hôtes.
                        </p>
        </div>
        
    }



    if (props.div === "annonce") {
        return (
        <div class="DesEtEqu">
                        <div className='Description'>
                            {toggledImg}
                            {toggledDiv}    
                        </div>
                    
                        <div className='Equipement'>
                            {toggledImgEquipement}
                            {toggledDivEquipement}    
                        </div>
                    </div>
        )

        
    }

    else {
        return (

                    <div className='aboutSuite'>
                        <div className='fiabilite'>
                            {toggledImgF}
                            {toggledDivF}    
                        </div>
                    
                        <div className='respect'>
                            {toggledImgRespect}
                            {toggledDivRespect}    
                        </div>
                    
                        <div className='service'>
                            {toggledImgService}
                            {toggledDivService}    
                        </div>
                    
                        <div className='responsabilite'>
                            {toggledImgResponsabilite}
                            {toggledDivResponsabilite}    
                        </div>
                        
                    
                    </div>

        )
        
    }

}

export default Collapse