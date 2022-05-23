import React from 'react';
import PrimaryButton from '../../components/primary-button';
import MonthPaidHeader from '../connect-form/month-paid-header';

type Props = {
  price?: number;
};

const ServiceConnectForm = ({ price }: Props): JSX.Element => {
  const onSubmitHandler = (): void => {
    console.log('Заглушка');
  };

  return (
    <form className="connect-form">
      <MonthPaidHeader
        title="Стоимость услуги"
        currentPrice={price ?? ServiceConnectForm.defaultProps.price}
      />
      <PrimaryButton
        text="Подключить"
        classNames="connect-form__connect-btn"
        onClick={onSubmitHandler}
      />
    </form>
  );
};

ServiceConnectForm.defaultProps = {
  price: NaN,
};

export default ServiceConnectForm;
