import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import RightArrow from '../../assets/icons/Right_arrow.svg';

class PathNames {
  static readonly tariffs = 'Тарифы';
  static readonly services = 'Услуги';
  static readonly tariffconstructor = 'Соберите свой тариф';
}

const CurrentPathInfo: FC = () => {
  const pathnames = useLocation()
    .pathname.split('/')
    .filter(el => el.length > 0);

  return (
    <div className="path-info">
      <p className="path-info__item">Главная</p>
      {pathnames.map(el => {
        const key = el as keyof typeof PathNames;
        const lastElem = pathnames.length - 1;

        return (
          <React.Fragment key={el}>
            <img
              src={RightArrow}
              alt="right arrow"
              className="path-info__right-arrow"
            />
            <p
              className={`path-info__item ${
                key === pathnames[lastElem] ? 'path-info__item--active' : ''
              }`}
            >
              {PathNames[key].toString()}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CurrentPathInfo;
