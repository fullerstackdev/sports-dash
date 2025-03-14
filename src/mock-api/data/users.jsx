import { SERVICE_URL } from '../../config';
import api from '../api';

const usersData = [
  {
    id: 1,
    name: 'Blaine Cottrell',
    position: 'Project Manager',
    email: 'me@blainecottrell.com',
    phone: '+6443884455',
    group: 'Work',
    thumb: '/img/profile/profile-1.webp',
  },
  {
    id: 2,
    name: 'Kirby Peters',
    position: 'Accounting',
    email: 'contact@kirbypeters.com',
    phone: '+643451134',
    group: 'Work',
    thumb: '/img/profile/profile-2.webp',
  },
  {
    id: 3,
    name: 'Olli Hawkins',
    position: 'Client Relations Lead',
    email: 'olli_hawkins@gmail.com',
    phone: '+648751212',
    group: 'Personal',
    thumb: '/img/profile/profile-3.webp',
  },
  {
    id: 4,
    name: 'Joisse Kaycee',
    position: 'UX Designer',
    email: 'joissekaycee@gmail.com',
    phone: '+649023571',
    group: 'Work',
    thumb: '/img/profile/profile-4.webp',
  },
  {
    id: 5,
    name: 'Luna Wigglebutt',
    position: 'Security Chief',
    email: 'zaynhartley@zaynhartley.com',
    phone: '+642359205',
    group: 'Personal',
    thumb: '/img/profile/profile-5.webp',
  },
  {
    id: 6,
    name: 'Esperanza Lodge',
    position: 'Project Manager',
    email: 'esperanzalodge@msn.com',
    phone: '+649332310',
    group: 'Work',
    thumb: '/img/profile/profile-6.webp',
  },
  {
    id: 7,
    name: 'Kathryn Mengel',
    position: 'Executive Team Leader',
    email: 'kathrynmengel@gmail.com',
    phone: '+644924420',
    group: 'Work',
    thumb: '/img/profile/profile-7.webp',
  },
  {
    id: 8,
    name: 'Cherish Kerr',
    position: 'Development Lead',
    email: 'me@cherish.com',
    phone: '+649371222',
    group: 'Personal',
    thumb: '/img/profile/profile-8.webp',
  },
  {
    id: 9,
    name: 'Winry Rockbell',
    position: 'Mechanics Lead',
    email: 'winry@winryrockbell.com',
    phone: '+643449073',
    group: 'Work',
    thumb: '/img/profile/profile-9.webp',
  },
  {
    id: 10,
    name: 'Elsie Pernilla',
    position: '3D Designer',
    email: 'elsie@elsiepernilla.com',
    phone: '+644429098',
    group: 'Personal',
    thumb: '/img/profile/profile-3.webp',
  },
  {
    id: 11,
    name: 'Gresham Jeanette',
    position: 'Project Manager',
    email: 'Gresham@Jeanette.com',
    phone: '+649073732',
    group: 'Work',
    thumb: '/img/profile/profile-8.webp',
  },
  {
    id: 12,
    name: 'Luna Wigglebutt',
    position: 'Security Chief',
    email: 'me@sixtetera.com',
    phone: '+641084211',
    group: 'Work',
    thumb: '/img/profile/profile-5.webp',
  },
  {
    id: 13,
    name: 'Alicia Shannah',
    position: 'Tester',
    email: 'aliciashannah@msn.com',
    phone: '+647843431',
    group: 'Work',
    thumb: '/img/profile/profile-7.webp',
  },
  {
    id: 14,
    name: 'Emilia Antoine',
    position: 'Tester',
    email: 'hi@emiliaantoine.com',
    phone: '+641294829',
    group: 'Personal',
    thumb: '/img/profile/profile-1.webp',
  },
  {
    id: 15,
    name: 'Mickey Fianna',
    position: 'Developer Intern',
    email: 'mickeyfianna@elsiepernilla.com',
    phone: '+649873209',
    group: 'Personal',
    thumb: '/img/profile/profile-9.webp',
  },
  {
    id: 16,
    name: 'Kathleen Bertha',
    position: 'Client Relations',
    email: 'kathleenbertha@outlook.com',
    phone: '+643452345',
    group: 'Work',
    thumb: '/img/profile/profile-4.webp',
  },
];
api.onGet(`${SERVICE_URL}/users`).reply(200, usersData);
