import config from '../../../config.json';

const me = async (args: string[]): Promise<string> => {
  if (config.ascii === 'coday') {
    return ` 
 
                                                 
                                                               Petite présentaion
                                                               -------------------------------------------------------------
                   ***********         
               ***** ***********                               ${config.name}
            ** ****** *** ********                             Etudiant en Informatique a l'Université Paul Sabatier Toulouse.
           ****  ******  ** *******                            Sportif (rugby), oui sport et codage ne crée pas d'internal error system.
           ***     ******* ** ******                           Toujours en quête de nouveau projet ou d'idée. Si vous en avez n'hesité pas a me contacter.
           ***       **        *  **
            *|/------  -------\\ ** *                           <u><a href="${config.business_url}" target="_blank">Ma boite</a></u> ${config.business} developpement et mise en place de logiciel d'entreprise. ( En developpemnt )
             |       |=|       :===**                          <u><a href="${config.resume_url}" target="_blank">Mon CV</a></u>
              |  O  |   | O   |  }|*                           <u><a href="${config.repo}" target="_blank">Mon Github</a></u>
               |---- |   ----  |  |*
               |    |___       |\\/                             -------------------------------------------------------------
               |              |
               \\   -----     |                                 CONTACT 
                \\           |                                  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                  -__ -- -/                                    <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                                               <u><a href="https://www.instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
   
                                                               -------------------------------------------------------------

`;}
};

export default me;
