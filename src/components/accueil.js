import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgHome from '../assets/home.png'
import '../styles/accueil.css';
import Thumb from './thumb';

class Home extends Component {

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

    render() {
        return (
            <main className='homeMain'>
                <section>
                    <article>
                        <img src={imgHome} alt='home'/>
                        <h2>
                            <span>Chez vous,</span><span>partout et ailleurs</span>
                        </h2>
                    </article>

                    <div>
                        {this.state.annonces.map(annonce => (<article key ={annonce.id} className="annonces">
                            <Link to={{
                                    pathname: "/annonce",
                                    search: `?id=${annonce.id}`}}>
                                <Thumb src={annonce.cover} alt={annonce.title} h2={annonce.title} />
                            </Link>
                        </article>))}
                    </div>


                </section>
            </main>
        )
    }
}
export default Home;