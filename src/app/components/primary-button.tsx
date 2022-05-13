import React from 'react';

type Props = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  classNames?: string;
};

const PrimaryButton = ({
  text,
  onClickHandler,
  type,
  classNames,
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      className={`primary-button ${classNames}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

PrimaryButton.defaultProps = {
  type: 'button',
};

export default PrimaryButton;
