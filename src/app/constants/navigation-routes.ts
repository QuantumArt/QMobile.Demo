import { NavigationRoutesGroup } from '../types';

export const headerNavRoutes: NavigationRoutesGroup = [
  {
    name: 'Тарифы',
    linkTo: 'tariffs',
  },
  {
    name: 'Услуги',
    linkTo: 'services',
  },
  {
    name: 'Устройства',
    linkTo: 'devices',
  },
  {
    name: 'Пакеты',
    linkTo: 'tariff_packages',
  },
];

export const footerNavRoutes: NavigationRoutesGroup = [
  ...headerNavRoutes,
  {
    name: 'О компании',
    linkTo: 'about',
  },
  {
    name: 'Контакты',
    linkTo: 'contacts',
  },
];
