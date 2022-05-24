import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';

import Range from '../../components/range';
import Phone from '../../../assets/icons/Phone.svg';
import Internet from '../../../assets/icons/Internet.svg';
import connectStore from '../../../stores/connect/connect-store';
import useDebounce from '../../hooks/useDebounce';
import { findBefore, findAfter } from '../../utils';

const MinutesInternetRanges = (): JSX.Element => {
  const [minutesStep, setMinutesStep] = useState(
    connectStore.rangeMinutesValues[0],
  );

  const [internetStep, setInternetStep] = useState(
    connectStore.rangeInternetValues[0],
  );

  const onDragMinutes = (value: number): void => {
    let computedValue = 0;
    if (value > minutesStep) {
      computedValue = findAfter(connectStore.rangeMinutesValues, value);

      setMinutesStep(computedValue);
    }

    if (value < minutesStep) {
      computedValue =
        findBefore(connectStore.rangeMinutesValues, value) ?? minutesStep;

      setMinutesStep(computedValue);
    }
    connectStore.setMinutes(computedValue);
  };

  const onDragInternet = (value: number): void => {
    let computedValue = 0;
    if (value > internetStep) {
      computedValue = findAfter(connectStore.rangeInternetValues, value);
      setInternetStep(computedValue);
    }

    if (value < internetStep) {
      computedValue =
        findBefore(connectStore.rangeInternetValues, value) ?? internetStep;
      setInternetStep(computedValue);
    }
    connectStore.setInternet(computedValue);
  };

  const debouncedDragMinutes = useDebounce(onDragMinutes, 100);

  return useObserver(() => (
    <div className="constructor-page-content__ranges-menu">
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Звонки на все номера России
        </p>
        <Range
          min={150}
          max={1000}
          value={minutesStep}
          onDragHandler={debouncedDragMinutes}
          valueDesc="мин"
          logosrc={Phone}
          titleText={`${minutesStep} мин и 50 смс`}
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
