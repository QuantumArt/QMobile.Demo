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

  return useObserver(() => {
    return (
      <>
        {servicesList.map(el => {
          return (
            <div className="connect-form__item" key={el.type}>
              <header className="connect-form__item-header">{el.type}</header>
              {el.services.map(el => (
                <div className="connect-form__slider-container" key={el.id}>
                  <Checkbox
                    isChecked={connectStore.services.activeServicesIds.includes(
                      el.id,
                    )}
                    onChangeHandler={onChangeCheckbox(el.id)}
                  />
                  <Accordion
                    title={el.alias}
                    body={
                      <p
                        style={{
                          fontSize: '12px',
                          color: 'grey',
                        }}
                      >
                        {el.description}
                      </p>
                    }
                  />
                </div>
              ))}
            </div>
          );
        })}
      </>
    );
  });
};

export default ServiceGroupContainer;
