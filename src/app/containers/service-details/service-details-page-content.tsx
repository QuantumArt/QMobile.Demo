import React from 'react';

import Present from '../../../assets/images/present.png';
import Infinity from '../../../assets/images/infinity.png';
import MusicIcon from '../../../assets/images/music_icon.png';
import AdvantageCard from './advantage-card';
import ServiceConnectForm from './service-connect-form';
import ParametersList from '../parameters-list/parameters-list';

const advantagesList = [
  {
    description: 'Специальные условия при первом подключении',
    image: Present,
  },
  {
    description: 'Безлимитный интернет на музыку в приложении',
    image: Infinity,
  },
  {
    description: 'HD-качество звука, новинки и персональные плейлисты',
    image: MusicIcon,
  },
];

const ServiceDetailsPageContent = (): JSX.Element => {
  return (
    <div className="service-details__content-container">
      <h1 className="service-details__main-title">Заголовок</h1>
      <div className="service-details__advantages-container">
        {advantagesList.map(({ description, image }) => (
          <AdvantageCard
            key={description}
            description={description}
            image={image}
          />
        ))}
      </div>
      <div className="flex-wrapper space-between">
        <div className="constructor-page-content__main-info parameters-list-container">
          <ParametersList
            paramList={}
          />
        </div>
        <ServiceConnectForm />
      </div>
    </div>
  );
};

export default ServiceDetailsPageContent;
