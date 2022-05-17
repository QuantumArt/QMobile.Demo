import React from 'react';

type BtnProps = {
  title: string;
  onClick: () => void;
};

const TariffsFilterBtn = ({ title, onClick }: BtnProps): JSX.Element => (
  <button
    className="tariffs-page-content__filter-btn"
    type="button"
    onClick={onClick}
  >
    {title}
  </button>
);

export default TariffsFilterBtn;
