import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  table = [
    {
      titre:'Mon premier Post',
      contenu:'Buffer qui fait partie des outils de programmation les plus utilisés vous permettra de ' +
        'connecter jusqu’à 6 réseaux sociaux : Facebook, Twitter, Google+, LinkedIn, ' +
        'Instagram et Pinterest. Vous prendrez rapidement en main l’outil tant son utilisation est simple et intuitive.',
      created:new Date()
    },
    {
      titre:'Mon deuxième Post',
      contenu:'Avec Buffer, Hootsuite est l’autre outil de planification le plus utilisé pour gérer ' +
        'les réseaux sociaux. Crée au début pour la gestion des comptes' +
        ' Twitter, il peut être associé aujourd’hui avec 35 réseaux sociaux incluant Instagram et Youtube notamment.',
      created:new Date()
    },
    {
      titre:'Encore un Post',
      contenu:'Sproutsocial donne la possibilité de gérer les réseaux sociaux suivant : Facebook,' +
        ' Google+, LinkedIn, Instagram et Twitter. C’est l’outil idéal si vous êtes plusieurs à intervenir sur différents profils ' +
        'et si vous avez besoin de déléguer la gestion des comptes à d’autres utilisateurs. ',
      created:new Date()
    }
  ];
  constructor(){}
}
