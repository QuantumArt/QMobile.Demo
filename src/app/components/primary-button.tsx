import React, { MouseEvent } from 'react';

type Props = {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  classNames?: string;
};

const PrimaryButton = ({ text, onClick, classNames }: Props): JSX.Element => (
  <button
    type="button"
    className={`primary-button ${classNames}`}
    onClick={onClick}
  >
    {text}
  </button>
);

PrimaryButton.defaultProps = {
  classNames: '',
};

export default PrimaryButton;
