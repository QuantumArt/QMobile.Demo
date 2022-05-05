import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';
import connectStore from '../../../stores/connect/connect-store';
import PrimaryButton from '../../components/primary-button';
import { MonthPaidHeader, PackageHeader } from './connect-header';

type Props = {
  children?: JSX.Element;
  headerType: 'monthPaid' | 'package';
};

const ConnectForm: FC<Props> = ({ children, headerType }) => {
  const onSubmitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`${connectStore.minutes} ${connectStore.internet}`);
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
        onClickHandler={onSubmitHandler}
        classNames="connect-form__connect-btn"
      />
    </form>
  ));
};

export default ConnectForm;
