import React from 'react';
import { useLocation } from 'react-router-dom';

import RightArrow from '../../assets/icons/Right_arrow.svg';

class PathNames {
  static readonly tariffs = 'Тарифы';

  static readonly services = 'Услуги';

  static readonly devices = 'Устройства';

  static readonly tariffconstructor = 'Соберите свой тариф';
}

export type Props = {
  elementName?: string;
};

const CurrentPathInfo = ({ elementName }: Props): JSX.Element => {
  const lastElementName = elementName ? [elementName] : [''];

  const pathnames = useLocation()
    .pathname.split('/')
    .concat(lastElementName)
    .filter(route => route.length > 0 && !Number(route));

  return (
    <div className="path-info">
      <p className="path-info__item">Главная</p>
      {pathnames.map(el => {
        const key = el;
        const lastElem = pathnames.length - 1;

        const value = el as keyof typeof PathNames;

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
              {Object.keys(PathNames).includes(value)
                ? PathNames[value].toString()
                : el}
              {/* {el} */}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

CurrentPathInfo.defaultProps = {
  elementName: '',
};

export default CurrentPathInfo;
