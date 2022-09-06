// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Bonjour! Voici les commandes disponibles:
\n${c}\n
[tab]: auto-completion.
[ctrl+l]/clear: vider le terminal.\n
Taper 'me' pour voir qui je suis !
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Ouverture de Github ...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Bonjour, Je suis ${config.name}. 
Bienvenu sur mon site !
Apprenez en plus sur moi :
'me' - un tres court CV.
'cv' - mon CV complet format PDF.
'email' - pour me contacter.
'github' - mon github.`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Ouverture CV...';
};

/*
// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
*/

// Contact
export const email = async (args: string[]): Promise<string> => {
  return `Pour me contacter par mail rien de plus simple: <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Ouverture github...';
};

/*
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};
*/

/*
// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};
*/

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `hello_world.sh cv.pdf mdp_banque.txt`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Les DVD c'est mieux !`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `Houla, vous utilisez 'vi'? essayer 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' j'aime pas trop. Je prefére 'nano'!`;
};


export const nano = async (args: string[]): Promise<string> => {
  return `'nano'? trop petit. Longue vie a Webstorm !`;
};

/*
export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};
 */

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission refusée: un grand pouvoir inplique de grandes responsabilités ? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
                                                                                                  
                                                  dddddddd                                        
        CCCCCCCCCCCCC                             d::::::d                                        
     CCC::::::::::::C                             d::::::d                                        
   CC:::::::::::::::C                             d::::::d                                        
  C:::::CCCCCCCC::::C                             d:::::d                                         
 C:::::C       CCCCCC   ooooooooooo       ddddddddd:::::d   aaaaaaaaaaaaayyyyyyy           yyyyyyy
C:::::C               oo:::::::::::oo   dd::::::::::::::d   a::::::::::::ay:::::y         y:::::y 
C:::::C              o:::::::::::::::o d::::::::::::::::d   aaaaaaaaa:::::ay:::::y       y:::::y  
C:::::C              o:::::ooooo:::::od:::::::ddddd:::::d            a::::a y:::::y     y:::::y   
C:::::C              o::::o     o::::od::::::d    d:::::d     aaaaaaa:::::a  y:::::y   y:::::y    
C:::::C              o::::o     o::::od:::::d     d:::::d   aa::::::::::::a   y:::::y y:::::y     
C:::::C              o::::o     o::::od:::::d     d:::::d  a::::aaaa::::::a    y:::::y:::::y      
 C:::::C       CCCCCCo::::o     o::::od:::::d     d:::::d a::::a    a:::::a     y:::::::::y       
  C:::::CCCCCCCC::::Co:::::ooooo:::::od::::::ddddd::::::dda::::a    a:::::a      y:::::::y        
   CC:::::::::::::::Co:::::::::::::::o d:::::::::::::::::da:::::aaaa::::::a       y:::::y         
     CCC::::::::::::C oo:::::::::::oo   d:::::::::ddd::::d a::::::::::aa:::a     y:::::y          
        CCCCCCCCCCCCC   ooooooooooo      ddddddddd   ddddd  aaaaaaaaaa  aaaa    y:::::y           
                                                                               y:::::y            
                                                                              y:::::y             
                                                                             y:::::y              
                                                                            y:::::y               
                                                                           yyyyyyy                
             
                                                                           ██████╗ ██╗   ██╗     █████╗ ██╗   ██╗███╗   ███╗███████╗██████╗ ██╗ ██████╗                
                                                                           ██╔══██╗╚██╗ ██╔╝    ██╔══██╗╚██╗ ██╔╝████╗ ████║██╔════╝██╔══██╗██║██╔════╝
                                                                           ██████╔╝ ╚████╔╝     ███████║ ╚████╔╝ ██╔████╔██║█████╗  ██████╔╝██║██║     
                                                                           ██╔══██╗  ╚██╔╝      ██╔══██║  ╚██╔╝  ██║╚██╔╝██║██╔══╝  ██╔══██╗██║██║     
                                                                           ██████╔╝   ██║       ██║  ██║   ██║   ██║ ╚═╝ ██║███████╗██║  ██║██║╚██████╗
                                                                           ╚═════╝    ╚═╝       ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝                                     
                                                                                                                                                                                               

Taper 'me' pour un peu mieux me connaitre.
Taper 'cv' pour obtenir mon CV format PDF.
Taper 'email' pour me contacter
Taper 'repo' ou cliquer <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">ICI</a></u> pour voir mes projets disponibles sur Github.
Taper 'projects' pour voir tout mes projets github directment sur le terminal.
Taper 'help' pour voir plein d'autres commandes possibles.
`;
};
