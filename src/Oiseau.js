import React from 'react';
import './Oiseau.css';
import oiseau from './img/oiseau_dos.png';


class Public extends React.Component{
    render() {
        return (

            <div className="paragraphe2">
                <div className="conteneur">
                    <h1>Histoire de l'oiseau à tête barrée</h1>
                    <div>        
                        <a><img src={oiseau} alt="Oiseau" /></a>   <br/>
                        <q>L’oie à tête barrée est l’oiseau volant le plus haut. Se rapprochant de l’espace, univers inconnu, il se pose plein de questions... 
                        </q>
                    </div>
                </div>
        	</div>

        )
    }
}


export default Public;