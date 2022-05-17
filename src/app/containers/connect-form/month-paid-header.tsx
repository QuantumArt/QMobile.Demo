import React from 'react';

type MonthPaidProps = {
  currentPrice: number;
};

export const MonthPaidHeader = ({
  currentPrice,
}: MonthPaidProps): JSX.Element => (
  <header className="connect-form__item connect-form__item--main-header-padding">
    <div className="connect-form__header-constructor">
      <p className="connect-form__month-paid-title">Ежемесячная плата</p>
      <p className="connect-form__price">{currentPrice} ₽</p>
    </div>
    <p className=" connect-form__header-days">За 30 дней</p>
  </header>
);

export default MonthPaidHeader;
