import React, { FC } from 'react';

type BtnProps = {
  name: string;
  onClickHandler: () => void;
};

const TariffsFilterBtn: FC<BtnProps> = ({ name, onClickHandler }) => {
  return (
    <button
      className="tariffs-filter-list__btn"
      type="button"
      onClick={onClickHandler}
    >
      {name}
    </button>
  );
};

export default TariffsFilterBtn;
