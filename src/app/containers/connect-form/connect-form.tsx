import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import PrimaryButton from '../../components/primary-button';
import PackageHeader from './package-header';
import MonthPaidHeader from './month-paid-header';

type Props = {
  children?: React.ReactNode;
  headerType: 'monthPaid' | 'package';
};

const ConnectForm = ({ children, headerType }: Props): JSX.Element => {
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
  };

  return useObserver(() => (
    <form className="connect-form">
      {headerType === 'package' ? (
        <PackageHeader
          currentPrice={connectStore.getPrice}
          minutes={connectStore.minutes}
          internet={connectStore.internet}
        />
      ) : (
        <MonthPaidHeader currentPrice={connectStore.getPrice} />
      )}
      {children}
      <PrimaryButton
        text="Подключить"
        onClick={onSubmitHandler}
        classNames="connect-form__connect-btn"
      />
    </form>
  ));
};

export default ConnectForm;
