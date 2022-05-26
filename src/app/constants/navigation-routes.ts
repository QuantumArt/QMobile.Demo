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
    linkTo: 'packages',
  },
];

export const footerNavRoutes: NavigationRoutesGroup = [...headerNavRoutes];
