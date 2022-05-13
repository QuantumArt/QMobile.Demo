import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import PrimaryButton from '../../components/primary-button';
import { MonthPaidHeader, PackageHeader } from './connect-header';

type Props = {
  children?: React.ReactNode;
  headerType: 'monthPaid' | 'package';
};

const ConnectForm = ({ children, headerType }: Props): JSX.Element => {
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(
      `${connectStore.minutes} ${connectStore.internet} ${connectStore.services.activeServicesIds}`,
    );
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
        type="submit"
        text="Подключить"
        onClick={onSubmitHandler}
        classNames="connect-form__connect-btn"
      />
    </form>
  ));
};

export default ConnectForm;
