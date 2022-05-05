import React, { FC } from 'react';
import Phone from '../../../assets/icons/Phone.svg';
import Internet from '../../../assets/icons/Internet.svg';

type PackageHeaderProps = {
  currentPrice: number;
  minutes: number;
  internet: number;
};

export const PackageHeader: FC<PackageHeaderProps> = ({
  currentPrice,
  minutes,
  internet,
}) => {
  return (
    <header className="connect-form__item connect-form__item--main-header-padding">
      <div className="connect-form__header-constructor">
        <p>Ваш пакет</p>
        <p className="connect-form__price">{currentPrice} ₽</p>
      </div>
      <p className=" connect-form__header-days connect-form__header-days--end">
        За 30 дней
      </p>
      <div className="connect-form__option-container">
        <img src={Phone} alt="phone_logo" className="connect-form__logo" />{' '}
        {minutes} мин и 50 SMS
      </div>
      <div className="connect-form__option-container">
        <img
          src={Internet}
          alt="internet_logo"
          className="connect-form__logo"
        />
        Интернет: {internet} гб
      </div>
    </header>
  );
};

type MonthPaidProps = Pick<PackageHeaderProps, 'currentPrice'>;

export const MonthPaidHeader: FC<MonthPaidProps> = ({ currentPrice }) => {
  return (
    <header className="connect-form__item connect-form__item--main-header-padding">
      <div className="connect-form__header-constructor">
        <p className="connect-form__month-paid-title">Ежемесячная плата</p>
        <p className="connect-form__price">{currentPrice} ₽</p>
      </div>
      <p className=" connect-form__header-days">За 30 дней</p>
    </header>
  );
};
