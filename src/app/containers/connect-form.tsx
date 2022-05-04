import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';

import Phone from '../../assets/icons/Phone.svg';
import Internet from '../../assets/icons/Internet.svg';
import constructorStore from '../../stores/connect-store';
import PrimaryButton from '../components/primary-button';

type Props = {
  children?: JSX.Element;
};

const ConnectForm: FC<Props> = ({ children }) => {
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`${constructorStore.minutes} ${constructorStore.internet}`);
  };

  return useObserver(() => (
    <form className="connect-form">
      <header className="connect-form__item connect-form__item--header">
        <div className="connect-form__header-constructor">
          <p>Ваш пакет</p>
          <p className="connect-form__price">{constructorStore.getPrice} ₽</p>
        </div>
        <p className=" connect-form__header-days connect-form__header-days--end">
          За 30 дней
        </p>
        <div className="connect-form__option-container">
          <img src={Phone} alt="phone_logo" className="connect-form__logo" />{' '}
          {constructorStore.minutes} мин и 50 SMS
        </div>
        <div className="connect-form__option-container">
          <img
            src={Internet}
            alt="internet_logo"
            className="connect-form__logo"
          />
          Интернет: {constructorStore.internet} гб
        </div>
      </header>
      {children}
      <PrimaryButton
        type="submit"
        text="Подключить"
        onClickHandler={onSubmitHandler}
      />
    </form>
  ));
};

export default ConnectForm;
