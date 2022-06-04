import React, { Component } from 'react';
import Header from './header';
import Home from './accueil';
import Apropos from './apropos';
import Annonces from './annonces';
import Footer from './footer';
import Error from './error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className='tout'>
               
                <Router>
                    <Header />
                    
                    <Routes>
                        <Route path='/' index element={<Home />}>
                        </Route>
                        <Route path='/about'  element={<Apropos />}>
                        </Route>
                        <Route path='/annonce'  element={<Annonces />}>
                        </Route>
                        <Route path='*' element={<Error />}></Route>
                    </Routes>

            

                    



                    

                    

                </Router>
                <Footer />
            </div>
        );
        
    }
}

export default App;