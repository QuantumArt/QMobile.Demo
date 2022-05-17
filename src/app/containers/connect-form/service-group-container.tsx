import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { ServicesList } from '../../../stores/connect/connect-services-groups';
import connectStore from '../../../stores/connect/connect-store';
import Checkbox from '../../components/checkbox';
import Accordion from '../accordion';

type Props = {
  servicesList: Array<ServicesList>;
};

const ServiceGroupContainer = ({ servicesList }: Props): JSX.Element => {
  const onChangeCheckbox = (id: number) => () => {
    connectStore.toggleActiveServices(id);
  };

  return useObserver(() => (
    <>
      {servicesList.map(listItem => (
        <div className="connect-form__item" key={listItem.type}>
          <header className="connect-form__item-header">{listItem.type}</header>
          {listItem.services.map(service => (
            <div className="connect-form__slider-container" key={service.id}>
              <Checkbox
                isChecked={connectStore.services.activeServicesIds.includes(
                  service.id,
                )}
                onChangeHandler={onChangeCheckbox(service.id)}
              />
              <Accordion
                title={service.alias}
                body={
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                    }}
                  >
                    {service.description}
                  </p>
                }
              />
            </div>
          ))}
        </div>
      ))}
    </>
  ));
};

export default ServiceGroupContainer;
