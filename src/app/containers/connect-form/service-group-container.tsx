import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import Checkbox from '../../components/checkbox';
import Accordion from '../accordion';
import ToggleData from './toggle-data';

type Props = {
  servicesIds: Array<number>;
};

const ServiceGroupContainer = ({ servicesIds }: Props): JSX.Element => {
  const onChangeCheckbox = (id: number) => () => {
    connectStore.toggleActiveServices(id);
  };

  return useObserver(() => (
    <>
      {servicesIds.map(serviceId => {
        const { id, alias, description } =
          connectStore.services.servicesGroup[serviceId];

        return (
          <div className="connect-form__item" key={serviceId}>
            <div className="connect-form__slider-container" key={id}>
              <Checkbox
                isChecked={connectStore.services.activeServicesIds.includes(id)}
                onChangeHandler={onChangeCheckbox(id)}
              />
              <div className="connect-form__toggles-wrapper">
                <ToggleData title={alias} description={description} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  ));
};

export default ServiceGroupContainer;
