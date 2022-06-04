import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import '../styles/header.css';

class Header extends Component {
    render() {
        if ("/" === window.location.href.replace('http://localhost:3000', '') || "" === window.location.href.replace('http://localhost:3000', ''))
        {
            return (
            <nav className="headerNav">
                <ul>
                    <ol>
                        <a href="/"><img src={logo} alt="Logo" /></a> 
                    </ol>
                    <ol className='active'>
                        <a href="/">Accueil</a> 
                    </ol>
                    <ol>
                        <a href="/about">A propos</a> 
                    </ol>
                </ul>
            </nav>
        );
          }
        
        if ("/about" === window.location.href.replace('http://localhost:3000', '')) {
            return (
            <nav className="headerNav">
                <ul>
                    <ol>
                        <a href="/"><img src={logo} alt="Logo" /></a> 
                    </ol>
                    <ol>
                        <a href="/">Accueil</a> 
                    </ol>
                    <ol className='active'>
                        <a href="/about">A propos</a> 
                    </ol>
                </ul>
            </nav>
            );
            

        }

        else {
            return (
            <nav className="headerNav">
                <ul>
                    <ol>
                        <a href="/"><img src={logo} alt="Logo" /></a> 
                    </ol>
                    <ol>
                        <a href="/">Accueil</a> 
                    </ol>
                    <ol>
                        <a href="/about">A propos</a> 
                    </ol>
                </ul>
            </nav>
            );
        }
    }
}

export default Header;