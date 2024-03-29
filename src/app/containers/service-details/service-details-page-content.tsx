import React from 'react';
import { useObserver } from 'mobx-react-lite';
import AdvantageCard from './advantage-card';
import ServiceConnectForm from './service-connect-form';
import ParametersList from '../parameters-list/parameters-list';
import servicesStore from '../../../stores/services/services-store';

type Props = {
  title?: string;
};

const ServiceDetailsPageContent = ({ title }: Props): JSX.Element => {
  return useObserver(() => (
    <div className="service-details__content-container">
      <h1 className="service-details__main-title">{title}</h1>
      <div className="service-details__advantages-container">
        {servicesStore.advantages.map(({ text, image }) => (
          <AdvantageCard key={text} description={text} image={image} />
        ))}
      </div>
      <div className="flex-wrapper space-between">
        <div className="constructor-page-content__main-info parameters-list-container">
          <ParametersList
            paramList={Array.from(servicesStore.parametersByGroup)}
            contentType="text"
            accordionsIsActive
          />
        </div>
        <ServiceConnectForm price={servicesStore.getPrice} />
      </div>
    </div>
  ));
};

ServiceDetailsPageContent.defaultProps = {
  title: 'Заголовок',
};

export default ServiceDetailsPageContent;
