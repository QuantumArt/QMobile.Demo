import React from 'react';
import Pdf from '../../../assets/icons/Pdf.svg';

type Props = {
  onClickHandler: () => void;
};

const DownloadPdfButton = ({ onClickHandler }: Props): JSX.Element => {
  const onClick = (): void => {
    onClickHandler();
  };

  return (
    <button type="button" className="download-pdf-btn" onClick={onClick}>
      <img alt="download" src={Pdf} /> Загрузить в формате pdf
    </button>
  );
};

export default DownloadPdfButton;
