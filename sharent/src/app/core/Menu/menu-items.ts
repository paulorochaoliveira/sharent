import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type?: string;
  children?: Menu[];
}

const MENUITEMS = [
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
      {state: 'bookings', name: 'Réservations', type: 'link'},
      {state: 'reviews', name: 'Évaluations', type: 'link'},
      {state: 'list', name: 'Mes objets', type: 'link'},
      {state: 'profile', name: 'Modifier profil', type: 'link'}
    ]
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


@Injectable()
export class MenuItems {
  getAll() {
    return MENUITEMS;
  }
}
