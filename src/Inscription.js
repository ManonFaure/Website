import React from 'react';
import {Popup, Prompt, promptChange, promptValue} from 'react-popup';

class Inscription extends React.Component {
    render() {
        return(
            <div id="responsive" class="modal fade bs-example-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" data-width="760">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span class="sr-only">Close</span>
                            </button>
                
                   
                    </div>
                </div>
            </div>
        );
    }
}
       
               {/*} <h4 class="modal-title" id="myModalLabel">CONNEXION</h4>
                </div>
                <div class="modal-body">
                    <div class="row-fluid">
                        <div id="resultat" class='erreur'><?php //if(isset($erreur_actif)){ echo $erreur_actif; } ?></div>
                        <div id="resultat" class='erreur'><?php //if(isset($erreur_auth)){ echo $erreur_auth; } ?></div>
                        <form role="form" id="formInscription" method="POST">
                            <label for='login' style="padding-top: 5px;">Nom de compte :</label>
                            <input type='text' id="login" name='login' class="form-control" style='width: 80%;' placeholder='Nom de compte'>
                            <br>
                            <label for='password'>Mot de passe :</label>
                            <input type='password' id="password" name='password' class='form-control' style='width: 80%;' placeholder='Mot de passe'>
                            <br> 
                            <input type='submit' class='btn btn-primary' id="submit" value='Connexion' name='connexion'> 
                            <input type='submit' class='btn btn-primary disabled' value='Mot de passe oublié ?' name='forgetPassword'> 
                            <br><br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</div>*/}

export default Inscription;
