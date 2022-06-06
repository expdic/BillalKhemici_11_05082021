import React, { Component } from "react";
import '../styles/annonces.css';
import star from '../assets/star.png';
import Gallerie from "./gallerie"
import Collapse from './collapse';
import Error from "./error";


class Annonces extends Component {

    

    constructor(props) {
        super(props);
        
        this.state = {
            annonces: []
            
            


            
        }
    }

    componentDidMount() {
        
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            .then((response) => response.json())
            .then(logements => this.setState({ annonces: logements }));
    }

    
    

    nmbrEtoile(note) {
        console.log(parseInt(note))
        if (parseInt(note) === 1) {
            return (
                <div className="noteDiv">        
                                <span><img src={ star } alt="star1" className="red"></img></span>
                                <span><img src={ star } alt="star2" className="gray"></img></span>
                                <span><img src={ star } alt="star3" className="gray"></img></span>
                                <span><img src={ star } alt="star4" className="gray"></img></span>
                                <span><img src={ star } alt="star5" className="gray"></img></span>
                            </div>
            )
        }

        else if (parseInt(note) === 2) {
            return (
                <div className="noteDiv">        
                                <span><img src={ star } alt="star1" className="red"></img></span>
                                <span><img src={ star } alt="star2" className="gray"></img></span>
                                <span><img src={ star } alt="star3" className="gray"></img></span>
                                <span><img src={ star } alt="star4" className="gray"></img></span>
                                <span><img src={ star } alt="star5" className="gray"></img></span>
                            </div>
            )
        }

        else if (parseInt(note) === 3) {
            return (
                <div className="noteDiv">        
                                <span><img src={ star } alt="star1" className="red"></img></span>
                                <span><img src={ star } alt="star2" className="red"></img></span>
                                <span><img src={ star } alt="star3" className="red"></img></span>
                                <span><img src={ star } alt="star4" className="gray"></img></span>
                                <span><img src={ star } alt="star5" className="gray"></img></span>
                            </div>
            )
        }

        else if (parseInt(note) === 4) {
            return (
                <div className="noteDiv">        
                                <span><img src={ star } alt="star1" className="red"></img></span>
                                <span><img src={ star } alt="star2" className="red"></img></span>
                                <span><img src={ star } alt="star3" className="red"></img></span>
                                <span><img src={ star } alt="star4" className="red"></img></span>
                                <span><img src={ star } alt="star5" className="gray"></img></span>
                            </div>
            )
        }

        else if (parseInt(note) === 5) {
            return (
                <div className="noteDiv">        
                                <span><img src={ star } alt="star1" className="red"></img></span>
                                <span><img src={ star } alt="star2" className="red"></img></span>
                                <span><img src={ star } alt="star3" className="red"></img></span>
                                <span><img src={ star } alt="star4" className="red"></img></span>
                                <span><img src={ star } alt="star5" className="red"></img></span>
                            </div>
            )
        }



        
        
    }

    render() {

        let Yes = 0


        
        return (

            <main className="logementsMain">
                

                {this.state.annonces.map(annonce => {

                    if (annonce.id !== window.location.href.replace('http://localhost:3000/annonce?id=', '')) { 
                        Yes = Yes + 1 
                    }

                    if (annonce.id === window.location.href.replace('http://localhost:3000/annonce?id=', '')) { 

                        


                        return (
                            <section>
                                <article>
                                    
                                    <div>
                                        <Gallerie picture={annonce.pictures}/>
                                    </div>

                        <h2>
                            {annonce.title} 
                        </h2>
                        <h3>
                            {annonce.location} 
                        </h3>

                                    <div> {annonce.tags.map((tag) => (
                            <span className="tag">
                                {tag}
                            </span>
                        ))}
                                        
                        </div>

                        <div className="noteEtHost">

                        

                            

                            <div className="hostDiv">
                                <span>{annonce.host.name.split(' ')[0]} <br /> {annonce.host.name.split(' ')[1]} </span>
                                <img src={annonce.host.picture} alt={annonce.host.name}></img>
                            </div>

                            

                            {this.nmbrEtoile(annonce.rating)}    
                                
                                

                        </div>

                                </article>
                                <Collapse div = "annonce" equipments = {annonce.equipments} description = {annonce.description} />
                </section>
                
                        
                   )
                    }

                    if (annonce.id !== window.location.href.replace('http://localhost:3000/annonce?id=', '') && Yes === 20) {
                        return (
                            <Error />
                        )
                    }

                })} 
                
                


            </main>

        )
    }
}






export default Annonces
