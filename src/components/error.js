import React, { Component } from 'react';
import logo from '../assets/logoWhite.svg';
import '../styles/error.css';

class Error extends Component {
    render() {
        return (
            <div className='errorDiv'>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href='/'> Retourner sur la page d’accueil</a>
            </div>
        )
    }
}

export default Error