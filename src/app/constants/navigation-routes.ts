import { NavigationRoutesGroup } from "../types";

export const headerNavRoutes: NavigationRoutesGroup =  [
    {
      name: 'Тарифы',
      linkto: 'tariffs',
    },
    {
        name: 'Услуги',
        linkto: 'services',
      },
      {
        name: 'Устройства',
        linkto: 'devices',
      },
      {
        name: 'Пакеты',
        linkto: 'tariff_packages',
      },
  ];

  export const footerNavRoutes: NavigationRoutesGroup = [
      ...headerNavRoutes,
      {
        name: 'О компании',
        linkto: 'about',
      },
      {
        name: 'Контакты',
        linkto: 'contacts',
      }
  ]