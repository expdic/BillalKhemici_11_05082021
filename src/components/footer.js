import React, { Component } from 'react';
import logo from '../assets/logoWhite.svg';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={logo} alt="Logo Kasa" />
                <p>© 2020 Kasa. All rights reserved
                </p>
            </footer>
        )
    }
}

export default Footer;