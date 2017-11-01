import { User } from './User';


/**
 * Forgot password template
 *
 * @param {User} User User Object
 * @returns {string} mail message
 */
export function forgotPassword(user: User): string {
  const mailMessage = `
  <h3>Bonjour ${user.nom} ${user.prenom}.</h3>
  Cliquez sur le lien suivant pour réinitialiser votre mot de passe : <br/>
  <a href="http://localhost:4200/init-password/${user._id}">Réinitialiser le mot de passe.</a>
  `;
  return mailMessage;
}


/**
 * Validate account template
 *
 * @param {User} User User object
 * @returns {string} mail message
 */
export function validateAccount(user: User): string {
  const mailMessage = `
  <h3>Bonjour ${user.nom} ${user.prenom}.</h3>
  Merci de vous être enregistrer sur #NOM APPLI#. <br/>
  Plus qu'une étape avant d'utiliser votre compte. <br/> <br/>
  Cliquez sur le lien suivant pour valider votre compte :
  <a href="http://localhost:4200/user-valide/${user._id}">Validation du Compte.</a>
  `;
  return mailMessage;
}
