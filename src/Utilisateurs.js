/**
 * 
 * En principe ce fichier devrait servir de base de données pour imiter (plus ou moins) le serveur
 * dont je n'ai pas trouvé le moyen de me connecter
 */

/**
 * On crée donc un contructeur Utilisateur qui prend en paramètre les données pouvant se trouver
 * sur la page de l'utilisateur.
 * /!\ Il faudrait rajouter un champ pour la photo de profil, le nombre d'abonnés, d'abonnements et de publications
 * ainsi qu'un tableau contenant ses publications s'il en a
 */
function Utilisateur(nom, prenom, pseudonyme, description){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudonyme = pseudonyme;
    this.description = description;
}

const armstrong = new Utilisateur("Armstrong", "Neil", "Gemini", "description");
const ptolemee = new Utilisateur("Ptolémée", "Claudius", "Ptolem", "description");
const copernic = new Utilisateur("Copernic", "Nicolas", "Nico", "description")

let utilisateurs = [armstrong, ptolemee, copernic];
console.log(utilisateurs);

/**
 * https://codepen.io/Roemerdt/pen/epKjdM
 */