import React/*, { Component }*/ from 'react';
import Header from './Header.js';
import Accueil from './Accueil.js';
import ThreeContainer from './ThreeContainer.js';
import Equipe from'./Equipe.js';
import Naissance from './Naissance.js';
import Oiseau from './Oiseau.js';
import Description from './Description.js';
import Public from './Public.js';
import './Oiseau.css';
import Contact from './Contact.js';
import Footer from './Footer.js';

class App extends React.Component{
    render() {
        return (
            <body className="top">

				<Header />
				<Accueil />
				<div className="divVid"></div>
                
				<div className="divCanvas">
                    <ThreeContainer
                        width={window.innerWidth}
                        height={window.innerHeight}/>
				</div>

				<div id="equipe">
					<Equipe />
				</div>

				<div className="divVid"></div>

				<div id="naissance">
					<Naissance />
				</div>

				<div className="divVid"></div>

				<div id="description">
					<Description />
				</div>

				<div className="divVid"></div>

				<div id="public">
					<Public />
				</div>
				
				<div className="divVid"></div>

				<div id="banner">
					<div id="cloud-scroll"></div>
					<div id="oiseau">
						<Oiseau />
					</div>
				</div>

				<div id="contact">
					<Contact />
				</div>
				
				<div id="footer">
					<Footer />
				</div>
    		</body>
    	);
  	}
}

export default App;
