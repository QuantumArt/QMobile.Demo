import React from 'react';

type BtnProps = {
  title: string;
  onClick: () => void;
};

const TariffsFilterBtn = ({ title, onClick }: BtnProps): JSX.Element => {
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
