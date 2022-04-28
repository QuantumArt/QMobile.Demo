import React, { FC } from 'react';

type Props = {
  text: string;
  onClickHandler: () => void;
};

const PrimaryButton: FC<Props> = ({ text, onClickHandler }) => {
  return <button onClick={onClickHandler}>{text}</button>;
};

export default PrimaryButton;
