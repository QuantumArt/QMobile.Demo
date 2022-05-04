import React, { FC } from 'react';
import { useObserver } from 'mobx-react-lite';
import Range from '../components/range';
import Phone from '../../assets/icons/Phone.svg';
import Internet from '../../assets/icons/Internet.svg';
import constructorStore from '../../stores/constuctor-store';

const ConsructorRanges: FC = () => {
  const onDragMinutes = (value: number) => {
    constructorStore.setMinutes(value);
  };

  const onDragInternet = (value: number) => {
    constructorStore.setInternet(value);
  };

  return useObserver(() => (
    <div className="constructor-page-content__ranges-menu">
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Звонки на все номера России
        </p>
        <Range
          min={150}
          max={1500}
          value={constructorStore.minutes}
          onDragHandler={onDragMinutes}
          valueDesc="мин"
          logosrc={Phone}
          titleText={`${constructorStore.minutes} мин и 50 смс`}
        />
      </div>
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Интернер по России
        </p>
        <Range
          min={3}
          max={30}
          value={constructorStore.internet}
          onDragHandler={onDragInternet}
          valueDesc="гб"
          logosrc={Internet}
          titleText={`${constructorStore.internet} гб`}
        />
      </div>
    </div>
  ));
};

export default ConsructorRanges;
