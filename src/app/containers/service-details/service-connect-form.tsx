import React from 'react';
import PrimaryButton from '../../components/primary-button';
import MonthPaidHeader from '../connect-form/month-paid-header';

const ServiceConnectForm = (): JSX.Element => {
  const onSubmitHandler = (): void => {
    console.log('Заглушка');
  };

  return (
    <form className="connect-form">
      <MonthPaidHeader title="Стоимость услуги" currentPrice={500} />
      <PrimaryButton
        text="Подключить"
        classNames="connect-form__connect-btn"
        onClick={onSubmitHandler}
      />
    </form>
  );
};

export default ServiceConnectForm;
