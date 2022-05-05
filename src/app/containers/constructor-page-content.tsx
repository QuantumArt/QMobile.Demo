import React, { FC } from 'react';
import { IConnectServices } from '../../stores/connect/connect-services-groups';
import ConnectForm from './connect-form/connect-form';
import ServiceGroupContainer from './connect-form/service-group-container';
import ConsructorRanges from './constructor-ranges';

export const services: IConnectServices = {
  servicesList: [
    {
      type: 'Интернет',
      services: [
        {
          id: 1234,
          alias: 'БИТ за границей',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 567,
          alias: 'Макси БИТ за границей',
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
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 24659,
          alias: 'Забугорище',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
      ],
    },
    {
      type: '50 SMS в поездках по миру',
      services: [
        {
          id: 600,
          alias: 'Ноль без границ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
        {
          id: 8790,
          alias: '100 SMS в поездках по миру',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida lacus magna, ultrices ullamcorper sapien mattis eget. Donec volutpat leo enim, nec viverra leo facilisis at.',
        },
      ],
    },
  ],
  activeServicesIds: [567],
};

const ConsructorPageContent: FC = () => {
  return (
    <div className="constructor-page-content">
      <p className="page-content-title page-content-title--constructor">
        Соберите свой тариф
      </p>
      <div className="flex-wrapper space-between">
        <div className="constructor-page-content__main-info">
          <ConsructorRanges />
        </div>
        <ConnectForm headerType="package" >
          <ServiceGroupContainer servicesList={services.servicesList} />
        </ConnectForm>
      </div>
    </div>
  );
};

export default ConsructorPageContent;
