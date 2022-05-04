import React, { FC } from 'react';

type Props = {
  text: string;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};

const PrimaryButton: FC<Props> = ({ text, onClickHandler, type }) => {
  return (
    <button type={type} className="primary-button" onClick={onClickHandler}>
      {text}
    </button>
  );
};

PrimaryButton.defaultProps = {
  type: 'button',
};

export default PrimaryButton;
