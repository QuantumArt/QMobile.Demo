import React, { FC } from 'react';

type BtnProps = {
  title: string;
  onClick: () => void;
};

const TariffsFilterBtn: FC<BtnProps> = ({ title, onClick }) => {
  return (
    <button
      className="tariffs-filter-list__btn"
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TariffsFilterBtn;
