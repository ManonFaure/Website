import React from 'react';
import {Route} from 'react-router'
import './Navigation.css';
import Accueil from './Accueil';
import Equipe from './Equipe';
import Naissance from './Naissance';
import Description from './Description';
import Public from './Public';
import Inscription from './Inscription';
import Connection from './Connection';
import {Nav, NavItem} from 'react-bootstrap';
import {Switch, Link} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
/*import accueil from './img/accueil.png';
import qui from './img/qui.png';
import genese from './img/genese.png';
import planete from './img/planete.png';
import vise from './img/public.png';*/
import Contact from './Contact';
<<<<<<< HEAD
import {Button, Navbar, NavDropdown, MenuItem} from 'react-bootstrap';
=======
import { Button, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import {Popup, Prompt} from 'react-popup';

>>>>>>> manon

class Header extends React.Component {

    render() {

        require("react-bootstrap/lib/NavbarHeader");
        return (

            <header className="s-header">

                {/*<div className="navigation">
                    <Nav brand="OPEN STARS" className="topnav" activeKey={1} height="1" width="1">
                        <NavItem>OPEN STARS</NavItem>
                        <NavItem><Scrollchor eventKey={1} to="" className="nav-link">Accueil</Scrollchor></NavItem>
                        <NavItem><Scrollchor eventKey={2} to="equipe" className="nav-link">Qui sommes-nous ?</Scrollchor></NavItem>
                        <NavItem><Scrollchor eventKey={3} to="naissance" className="nav-link">Genèse du projet</Scrollchor></NavItem>
                        <NavItem><Scrollchor eventKey={4} to="description" className="nav-link">Qu'est-ce qu'Open Stars ?</Scrollchor></NavItem>
                        <NavItem><Scrollchor eventKey={5} to="public" className="nav-link">Public visé</Scrollchor></NavItem>
                        <NavItem><Scrollchor eventKey={6}to="contact" className="nav-link">Contact</Scrollchor></NavItem>
                        <div className="topnav-right">
                             <NavItem><Link to="/inscription">S'inscrire</Link></NavItem>
                        </div>
                    </Nav>
        </div>*/}

                <Switch>
                    <Route exact path="/accueil" component={Accueil}/>
                    <Route exact path="/equipe" component={Equipe}/>
                    <Route exact path="/naissance" component={Naissance}/>
                    <Route exact path="/description" component={Description}/>
                    <Route exact path="/public" component={Public}/>
                    <Route exact path="/contact" component={Contact}/>
                    {/*<Route exact path="/inscription" component={Inscription}/>
                    <Route exact path="/connection" component={Connection}/>*/}
                </Switch>

                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">Open Stars</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}><Scrollchor to="">
                            Accueil
                        </Scrollchor></NavItem>
                        <NavItem eventKey={2}><Scrollchor to="equipe">
                            Qui sommes-nous ?
                        </Scrollchor></NavItem>
                        <NavItem eventKey={3}><Scrollchor to="naissance">
                            Genèse du projet
                        </Scrollchor></NavItem>
                        <NavItem eventKey={4}><Scrollchor to="description">
                            Qu'est-ce qu'Open Stars ?
                        </Scrollchor></NavItem>
                        <NavItem eventKey={5}><Scrollchor to="public">
                            Public visé
                        </Scrollchor></NavItem>
                        <NavItem eventKey={6}><Scrollchor to="contact">
                            Contact
                        </Scrollchor></NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/inscription">
                            S'inscrire
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Se connecter
                        </NavItem>
                    </Nav>
                </Navbar>;


            </header>
        )
    }
}


export default Header;