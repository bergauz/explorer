import {MenuItem} from '../models/menu_item.model';

export const THEME_SETTINGS = {
  color: 'dark',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Blocks',
    link: '/home',
    icon: ''
  },
  {
    title: 'Rich List',
    link: '/richlist',
    icon: ''
  },
  /*{
    title: 'Verify Contract',
    link: '/verify',
    icon: ''
  },*/
  {
    title: 'Wallet',
    link: 'https://wallet.gochain.io',
    icon: '',
    external: true
  },
  {
    title: 'Network Stats',
    link: 'https://stats.gochain.io',
    icon: '',
    external: true
  },
  /*{
    title: 'Settings',
    link: '/settings',
    icon: '',
  },*/
];

export const ROUTES = {
  HOME: 'home',
  BLOCK: 'block',
  ADDRESS: 'addr',
  RICHLIST: 'richlist',
  TRANSACTION: 'tx',
  SETTINGS: 'settings',
  VERIFY: 'verify',
};
