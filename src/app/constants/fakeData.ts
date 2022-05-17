import { IConnectServices } from '../../stores/connect/connect-services-groups';

export const services: IConnectServices = {
  servicesList: [
    {
      type: 'Интернет',
      services: [
        {
          id: 1234,
          alias: 'БИТ за границей',
          price: 50,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 567,
          alias: 'Макси БИТ за границей',
          price: 100,

          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
      ],
    },
    {
      type: 'Звонки',
      services: [
        {
          id: 877,
          alias: 'Ноль без границ',
          price: 75,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 24659,
          alias: 'Забугорище',
          price: 75,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
      ],
    },
    {
      type: 'Сообщения',
      services: [
        {
          id: 600,
          alias: '50 SMS в поездках по миру',
          price: 90,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 8790,
          alias: '100 SMS в поездках по миру',
          price: 75,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
      ],
    },
  ],
  activeServicesIds: [24659, 8790, 567],
};
