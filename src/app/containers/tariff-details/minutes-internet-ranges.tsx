import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useObserver } from 'mobx-react-lite';

import Range from '../../components/range';
import Phone from '../../../assets/icons/Phone.svg';
import Internet from '../../../assets/icons/Internet.svg';
import connectStore from '../../../stores/connect/connect-store';
import useDebounce from '../../hooks/useDebounce';

const findAfter = (arr: Array<number>, value: number): number =>
  arr.filter(elem => elem >= value)[0];

const findBefore = (arr: Array<number>, value: number): number | undefined =>
  arr.filter(elem => elem <= value).pop();

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

  const abc = [150, 300, 600, 1000];

  const [v, setv] = useState(abc[0]);
  const onDragTest = (e: number): void => {
    // connectStore.setMinutes(value);

    if (e > v) {
      // const truev = abc[abc.indexOf(v) + 1];
      const truev = findAfter(abc, e);
      setv(truev);
    }

    if (e < v) {
      // const truev = abc[abc.indexOf(v) - 1];
      const truev = findBefore(abc, e);
      setv(truev ?? v);
    }
  };

  const debouncedTest = useDebounce(onDragTest, 100);

  return useObserver(() => (
    <div className="constructor-page-content__ranges-menu">
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">
          Звонки на все номера России
        </p>
        <Range
          min={150}
          max={1000}
          value={v}
          onDragHandler={debouncedTest}
          valueDesc="мин"
          logosrc={Phone}
          titleText={`${v} мин и 50 смс`}
        />
      </div>

      {/* <input
        type="range"
        min={150}
        max={1000}
        onChange={onDragTest}
        ref={inputRef}
        value={v}
      /> */}
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
