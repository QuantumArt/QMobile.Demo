import React, { FC } from 'react';

type Props = {
  isChecked: boolean;
  onChangeHandler: () => void;
};

const Checkbox: FC<Props> = ({ isChecked, onChangeHandler }) => {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={onChangeHandler}
    />
  );
};

export default Checkbox;
