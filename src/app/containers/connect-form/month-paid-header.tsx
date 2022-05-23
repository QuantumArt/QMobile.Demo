import React from 'react';

type MonthPaidProps = {
  currentPrice: number;
  title?: string;
};

export const MonthPaidHeader = ({
  currentPrice,
  title,
}: MonthPaidProps): JSX.Element => (
  <header className="connect-form__item connect-form__item--main-header-padding">
    <div className="connect-form__header-constructor">
      <p className="connect-form__month-paid-title">{title}</p>
      <p className="connect-form__price">{currentPrice} ₽</p>
    </div>
    <p className=" connect-form__header-days">За 30 дней</p>
  </header>
);

MonthPaidHeader.defaultProps = {
  title: 'Ежемесячная плата',
};

export default MonthPaidHeader;
