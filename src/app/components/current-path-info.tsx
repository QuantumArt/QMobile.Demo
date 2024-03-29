import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import RightArrow from '../../assets/icons/Right_arrow.svg';

class PathNames {
  static readonly tariffs = 'Тарифы';

  static readonly services = 'Услуги';

  static readonly devices = 'Устройства';

  static readonly tariffconstructor = 'Соберите свой тариф';

  static readonly packages = 'Пакеты';
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

  const navigate = useNavigate();

  const onClickHandler = (navigateTo: string): void => {
    if (Object.keys(PathNames).includes(navigateTo)) navigate(`/${navigateTo}`);
  };

  return (
    <div className="path-info">
      {pathnames.map((el, index) => {
        const key = el;
        const lastElem = pathnames.length - 1;

        const value = el as keyof typeof PathNames;

        return (
          <React.Fragment key={el}>
            {index !== 0 && (
              <img
                src={RightArrow}
                alt="right arrow"
                className="path-info__right-arrow"
              />
            )}
            <p
              className={`path-info__item ${
                key === pathnames[lastElem] ? 'path-info__item--active' : ''
              }`}
              onClick={() => onClickHandler(key)}
              role="presentation"
            >
              {Object.keys(PathNames).includes(value)
                ? PathNames[value].toString()
                : el}
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
