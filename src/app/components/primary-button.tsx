import React, { FC } from 'react';

type Props = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  classNames?: string;
};

const PrimaryButton: FC<Props> = ({ text, onClickHandler, type, classNames }) => {
  return (
    <button type={type} className={`primary-button ${classNames}`} onClick={onClickHandler}>
      {text}
    </button>
  );
};

PrimaryButton.defaultProps = {
  type: 'button',
};

export default PrimaryButton;
