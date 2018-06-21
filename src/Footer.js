import React from 'react';
import foret from './img/foret5.jpg'

class Accueil extends React.Component{
    render(){
        return (
            <div className="accueil">
                <img className="image" src={foret} alt="telescope"/>
                
            </div>
           
        )
    }
    
}

export default Accueil;