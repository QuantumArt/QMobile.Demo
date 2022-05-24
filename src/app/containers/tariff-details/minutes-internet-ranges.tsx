import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    if (value > minutesStep) {
      const afterValue = findAfter(connectStore.rangeMinutesValues, value);
      setMinutesStep(afterValue);
    }

    if (value < minutesStep) {
      const beforeValue = findBefore(connectStore.rangeMinutesValues, value);
      setMinutesStep(beforeValue ?? minutesStep);
    }
    connectStore.setMinutes(minutesStep);
  };

  const onDragInternet = (value: number): void => {
    if (value > internetStep) {
      const afterValue = findAfter(connectStore.rangeInternetValues, value);
      setInternetStep(afterValue);
    }

    if (value < internetStep) {
      const beforeValue = findBefore(connectStore.rangeInternetValues, value);
      setInternetStep(beforeValue ?? internetStep);
    }
    connectStore.setInternet(internetStep);
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
