import React from 'react';

type Props = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  classNames?: string;
};

const PrimaryButton = ({
  text,
  onClick,
  type,
  classNames,
}: Props): JSX.Element => {
  return (
    <button
      type={type}
      className={`primary-button ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

PrimaryButton.defaultProps = {
  type: 'button',
};

export default PrimaryButton;
