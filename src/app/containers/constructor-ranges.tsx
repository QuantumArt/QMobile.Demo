import React, { FC, useEffect, useState } from 'react';
import Range from '../components/range';
import Phone from '../../assets/icons/Phone.svg';
import Internet from '../../assets/icons/Internet.svg'

const ConsructorRanges: FC = () => {
  const [mv, sm] = useState(150);
  const [gbv, sgbv] = useState(15);

  const onDragMinutes = (value: number) => {
    sm(value);
  };

  const onDragGb = (value: number) => {
    sgbv(value);
  };

  useEffect(() => {
    console.log(mv, gbv);
  });

  return (
    <div className="constructor-page-content__ranges-menu">
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">Звонки на все номера России</p>
        <Range
          min={150}
          max={1500}
          value={mv}
          onDragHandler={onDragMinutes}
          valueDesc="мин"
          logosrc={Phone}
          titleText={`${mv} мин и 50 смс`}
        />
      </div>
      <div className="constructor-page-content__ranges-menu-item">
        <p className="title--sm constructor-page-content__item-title">Интернер по России</p>
        <Range
          min={3}
          max={30}
          value={gbv}
          onDragHandler={onDragGb}
          valueDesc="гб"
          logosrc={Internet}
          titleText={`${gbv} гб`}
        />
      </div>
    </div>
  );
};

export default ConsructorRanges;
