import React from 'react';
import CurrentPathInfo from '../../components/current-path-info';

type Props = {
  pageTitle: string;
  cardsJsxElem: JSX.Element;
};

const PageWithCardsList = ({ pageTitle, cardsJsxElem }: Props): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="page-with-cards__path-wrapper">
          <CurrentPathInfo />
        </div>
        <h1 className="page-with-cards__page-title">{pageTitle}</h1>
      </div>
      <div className="page-with-cards__card-background">
        <div className="container">
          <div className="page-with-cards__сards-container">{cardsJsxElem}</div>
        </div>
      </div>
    </>
  );
};

export default PageWithCardsList;
