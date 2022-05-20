import React from 'react';
import PageWithCardsList from './sub-component/page-with-cards-list';
import PackagesPageContent from '../containers/packages/packages-page-content';

const Packages = (): JSX.Element => {
  return (
    <PageWithCardsList
      pageTitle="Пакеты"
      cardsJsxElem={<PackagesPageContent />}
    />
  );
};

export default Packages;
