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
          {listItem.services.map(({ id, alias, description }) => (
            <div className="connect-form__slider-container" key={id}>
              <Checkbox
                isChecked={connectStore.services.activeServicesIds.includes(id)}
                onChangeHandler={onChangeCheckbox(id)}
              />
              <Accordion
                title={alias}
                body={
                  <p
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                    }}
                  >
                    {description}
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
