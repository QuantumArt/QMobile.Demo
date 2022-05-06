import React, { FC } from 'react';

type BtnProps = {
  title: string;
  onClickHandler: () => void;
};

const TariffsFilterBtn: FC<BtnProps> = ({ title, onClickHandler }) => {
  return (
    <button
      className="tariffs-filter-list__btn"
      type="button"
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};

export default TariffsFilterBtn;
