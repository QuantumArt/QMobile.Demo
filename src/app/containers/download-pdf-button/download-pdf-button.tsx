import React from 'react';
import Pdf from '../../../assets/icons/Pdf.svg';

type Props = {
  tariffId: number;
};

const DownloadPdfButton = ({ tariffId }: Props): JSX.Element => {
  return (
    <a
      href={`${process.env.REACT_APP_DOWNLOAD_PDF_HOST}/api/product/${tariffId}?category=test&customerCode=qmobile_catalog&attachment=true`}
      className="download-pdf-btn"
      target="_blank"
      rel="noreferrer"
    >
      <img alt="download" src={Pdf} /> Загрузить в формате pdf
    </a>
  );
};

export default DownloadPdfButton;
