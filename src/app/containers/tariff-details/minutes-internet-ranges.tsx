import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import Range from '../../components/range';
import Phone from '../../../assets/icons/Phone.svg';
import Internet from '../../../assets/icons/Internet.svg';
import connectStore from '../../../stores/connect/connect-store';

const MinutesInternetRanges = (): JSX.Element => {
  const [minutesStep, setMinutesStep] = useState(
    connectStore.rangeMinutesValues[0],
  );

  const [internetStep, setInternetStep] = useState(
    connectStore.rangeMinutesValues[0],
  );

  const onDragMinutes = (value: number): void => {
    if (value > minutesStep) {
      const currStepIndex =
        connectStore.rangeMinutesValues.indexOf(minutesStep);
      const nextStep = connectStore.rangeMinutesValues[currStepIndex + 1];
      setMinutesStep(nextStep - minutesStep);
    }

    if (value < minutesStep) {
      const currStepIndex =
        connectStore.rangeMinutesValues.indexOf(minutesStep);
      const nextStep = connectStore.rangeMinutesValues[currStepIndex - 1];
      setMinutesStep(minutesStep - nextStep);
    }
    connectStore.setMinutes(value);
  };

  const onDragInternet = (value: number): void => {
    if (value > internetStep) {
      const currStepIndex =
        connectStore.rangeInternetValues.indexOf(internetStep);
      const nextStep = connectStore.rangeMinutesValues[currStepIndex + 1];
      setInternetStep(nextStep - internetStep);
    }

    if (value < internetStep) {
      const currStepIndex =
        connectStore.rangeInternetValues.indexOf(internetStep);
      const nextStep = connectStore.rangeInternetValues[currStepIndex - 1];
      setInternetStep(internetStep - nextStep);
    }
    connectStore.setInternet(value);
  };

  return useObserver(() => (
    <div className="constructor-page-content__ranges-menu">
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Звонки на все номера России
        </p>
        <Range
          min={connectStore.rangeMinutesValues[0]}
          max={
            connectStore.rangeMinutesValues[
              connectStore.rangeMinutesValues.length - 1
            ]
          }
          value={connectStore.rangeMinutes}
          onDragHandler={onDragMinutes}
          valueDesc="мин"
          logosrc={Phone}
          titleText={`${connectStore.minutes} мин и 50 смс`}
          step={minutesStep}
        />
      </div>
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Интернет по России
        </p>
        <Range
          min={connectStore.rangeInternetValues[0]}
          max={
            connectStore.rangeInternetValues[
              connectStore.rangeInternetValues.length - 1
            ]
          }
          value={connectStore.rangeInternet}
          onDragHandler={onDragInternet}
          valueDesc="гб"
          logosrc={Internet}
          titleText={`${connectStore.internet} гб`}
        />
      </div>
    </div>
  ));
};

export default MinutesInternetRanges;
