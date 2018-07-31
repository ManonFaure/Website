import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import { Modal, Nav, NavItem, Navbar } from 'react-bootstrap';
import Profil from './Profil';
import MainPage from './MainPage';
import './stylesheets/Header.css';
import * as Utilisateur from './Utilisateurs.js';


/** 
 * La classe Header créée la barre de menu avec la librairie bootsrap
 * ainsi que les modals de connection et d'inscription
 * Elle devrait se connecter au serveur distant afin de pouvoir récupérer le profil de l'utilisateur se connectant
 */

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showConnection: false,
            showInscription: false,
            pseudoInscription: '',
            emailInscription: '',
            passwordInscription: '',
            emailConnection: '',
            passwordConnection: ''

        };

        this.handleShowConnection = this.handleShowConnection.bind(this);
        this.handleCloseConnection = this.handleCloseConnection.bind(this);
        this.handleSubmitConnection = this.handleSubmitConnection.bind(this);
        this.handleShowInscription = this.handleShowInscription.bind(this);
        this.handleCloseInscription = this.handleCloseInscription.bind(this);
        this.handleSubmitInscription = this.handleSubmitInscription.bind(this);
    }

    // Fonction permettant de "cacher" le modal de connection (idem pour handleCloseInscription)
    handleCloseConnection() {
        this.setState({ showConnection: false });
    }

    // Fonction permettant de rendre "visible" le modal de connection (idem pour handleShowInscription)
    handleShowConnection() {
        this.setState({ showConnection: true });
    }

    // Fonction permettant de modifier la valeur du champ texte au fur et à mesure de la saisie de l'utilisateur (idem pour handleChangeConnection)
    handleChangeConnection(objet) {
        this.setState(objet);
    }

    handleCloseInscription() {
        this.setState({ showInscription: false });
    }

    /**
     * Fonction censée envoyer les données de connection au serveur 
     * /!\ Erreur lors de la connexion
     */
    handleSubmitConnection(event) {
        const email = this.state.emailConnection
        const password = this.state.passwordConnection
        fetch("http://192.168.86.35:8080/login", { method: "POST", header: { 'Content-Type': "application/json" }, body: JSON.stringify({ email, password }) })
            .then((token) => {
                console.log(token.headers.map.token)
                //console.log(token.json())
                for (var p of token.headers) {
                    console.log(p)
                }

            })
            .catch((erreur) => {
                alert(erreur.message);
            })
        alert('Mail: ' + this.state.emailConnection);
        alert('Password: ' + this.state.passwordConnection);
        event.prenventDefault();
    }

    handleShowInscription() {
        this.setState({ showInscription: true });
    }

    handleChangeInscription(objet) {
        this.setState(objet);
    }

    handleSubmitInscription(event) {
        var user = new Utilisateur();
        var utilisateur = Utilisateur.getUser();
        console.log(utilisateur)
        const pseudo = this.state.pseudoInscription
        const email = this.state.emailInscription
        const password = this.state.passwordInscription
        
        alert('Pseudonyme: ' + this.state.pseudoInscription);
        alert('Mail: ' + this.state.emailInscription);
        alert('Password: ' + this.state.passwordInscription);
        event.prenventDefault();
    }


    render() {
        return (

            <header className="s-header">

                {/* Création des routes menant aux différentes pages */}
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route  exact path="/home" component={MainPage} />
                    <Route exact path="/profil" component={Profil} />
                </Switch>


                {/* Création de la barre de navigation avec bootstrap (inverse = barre foncée) */}
                <Navbar fixedTop inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">Open Stars</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {/* Gestion du scroll avec la bibliothèque react-router-hash-link qui grâce au mot clé "smooth"
                          * permet de défiler jusqu'au composant lorsqu'on clique sur son lien dans la barre 
                          */}
                        <NavItem eventKey={1}>
                            <div>
                                <Link smooth to="/home#accueil">Accueil</Link>
                            </div>
                        </NavItem>
                        <NavItem eventKey={2} >
                            <div>
                                <Link smooth to="/home#equipe">Qui sommes-nous ?</Link>
                            </div>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <div>
                                <Link smooth to="/home#naissance">Genèse du projet</Link>
                            </div>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <div>
                                <Link smooth to="/home#description">Qu'est-ce qu'Open Stars ?</Link>
                            </div>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <div>
                                <Link smooth to="/home#public">Public visé</Link>
                            </div>
                        </NavItem>
                        <NavItem eventKey={6}>
                            <div>
                                <Link smooth to="/home#contact">Contact</Link>
                            </div>
                        </NavItem> 
                        <NavItem eventKey={7}> 
                            <div>
                                <Link to="profil">
                                    Profil
                                </Link>
                            </div>
                        </NavItem>
                    </Nav>
                    <Nav pullRight> {/* pullRight = on place les liens à droite de la barre*/}
                        <NavItem className="logSign" eventKey={1} onClick={this.handleShowInscription}>
                            S'inscrire
                            <Modal show={this.state.showInscription} onHide={this.handleCloseInscription}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="titre">Inscription</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="corps">
                                    <form onSubmit={this.handleSubmitInscription}>
                                        <div className="form__body">
                                            <input type="text" id="pseudoInscription" value={this.state.pseudoInscription} onChange={(event) => { this.handleChangeInscription({ pseudoInscription: event.target.value }) }} placeholder="Pseudonyme" />
                                            <input type="email" id="emailInscription" value={this.state.emailInscription} onChange={(event) => { this.handleChangeInscription({ emailInscription: event.target.value }) }} placeholder="Email" />
                                            <input type="password" id="passwordInscription" value={this.state.passwordInscription} onChange={(event) => { this.handleChangeInscription({ passwordInscription: event.target.value }) }} placeholder="Mot de passe" />
                                        </div>
                                        <input type="submit" className="validButton" value="S'inscrire" />
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </NavItem>

                        <NavItem className="logSign" eventKey={2} onClick={this.handleShowConnection}>
                            Se connecter
                            <Modal show={this.state.showConnection} onHide={this.handleCloseConnection}>
                                <Modal.Header closeButton>
                                    <Modal.Title className="titre">Connection</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="corps">
                                    <form onSubmit={this.handleSubmitConnection}>
                                        <div className="form__body">
                                            <input type="email" id="emailConnection" value={this.state.emailConnection} onChange={(event) => { this.handleChangeConnection({ emailConnection: event.target.value }) }} placeholder="Email" />
                                            <input type="password" id="passwordConnection" value={this.state.passwordConnection} onChange={(event) => { this.handleChangeConnection({ passwordConnection: event.target.value }) }} placeholder="Mot de passe" />
                                        </div>
                                        <input type="submit" className="validButton" value="Se connecter" />
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </NavItem >
                    </Nav>
                </Navbar>;

            </header>
        );
    }
}

export default Header;