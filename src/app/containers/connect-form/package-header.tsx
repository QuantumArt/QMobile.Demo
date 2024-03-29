import React from 'react';
import Phone from '../../../assets/icons/Phone.svg';
import Internet from '../../../assets/icons/Internet.svg';

type PackageHeaderProps = {
  currentPrice: number;
  minutes: number;
  internet: number;
};

const PackageHeader = ({
  currentPrice,
  minutes,
  internet,
}: PackageHeaderProps): JSX.Element => (
  <header className="connect-form__item connect-form__item--main-header-padding">
    <div className="connect-form__header-constructor">
      <p>Ваш пакет</p>
      <p className="connect-form__price">{currentPrice} ₽</p>
    </div>
    <p className=" connect-form__header-days connect-form__header-days--end">
      За 30 дней
    </p>
    <div className="connect-form__option-container">
      <img src={Phone} alt="phone_logo" className="connect-form__logo" />
      {minutes} мин и 50 SMS
    </div>
    <div className="connect-form__option-container">
      <img src={Internet} alt="internet_logo" className="connect-form__logo" />
      Интернет: {internet} гб
    </div>
  </header>
);

export default PackageHeader;
