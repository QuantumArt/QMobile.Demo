import React from 'react';
import CurrentPathInfo from '../../components/current-path-info';

type Props = {
  pageTitle: string;
  cardsJsxElem: JSX.Element;
};

const PageWithCardsList = ({ pageTitle, cardsJsxElem }: Props): JSX.Element => {
  return (
    <>
      <div className="page-with-cards__path-wrapper">
        <CurrentPathInfo />
      </div>
      <h1 className="page-with-cards__page-title">{pageTitle}</h1>
      <div className="page-with-cards__cards-background">
        <div className="page-with-cards__сards-container">{cardsJsxElem}</div>
      </div>
    </>
  );
};

export default PageWithCardsList;
