import React from 'react';

type Props = {
  isChecked: boolean;
  onChangeHandler: () => void;
};

const Checkbox = ({ isChecked, onChangeHandler }: Props): JSX.Element => {
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
