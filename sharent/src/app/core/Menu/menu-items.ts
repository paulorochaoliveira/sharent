import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMSNONAUTH = [
  {
    state: 'home',
    name: 'Accueil',
    type: 'link'
  },
  {
    state: 'listing',
    name: 'Rechercher',
    type: 'link',
  },
   {
      state: 'session',
      name: 'Session',
      type: 'sub',
      children: [
         {state: 'login', name: 'Connexion', type: 'link'},
         {state: 'signup', name: 'Nouveau compte', type: 'link'}
      ]
   }
];

const MENUITEMSAUTH = [
  {
    state: 'home',
    name: 'Accueil',
    type: 'link'
  },
  {
    state: 'listing',
    name: 'Rechercher',
    type: 'link',
  },
  {
    state: 'admin',
    name: 'Profil',
    type: 'sub',
    children: [
      {state: 'messages', name: 'Messages', type: 'link'},
      {state: 'reviews', name: 'Évaluations', type: 'link'},
      {state: 'list', name: 'Mes objets', type: 'link'},
      {state: 'profile', name: 'Modifier profil', type: 'link'}
    ]
  }
];


@Injectable()
export class MenuItems {
  getAllNonAuth() {
    return MENUITEMSNONAUTH;
  }

  getAllAuth() {
    return MENUITEMSAUTH;
  }
}
