import React, { FC } from 'react';
import ConnectForm from './connect-form';
import ConsructorRanges from './constructor-ranges';

const ConsructorPageContent: FC = () => {
  return (
    <div className="constructor-page-content">
      <p className="page-content-title page-content-title--constructor">
        Соберите свой тариф
      </p>
      <div className="flex-wrapper">
        <div className='constructor-page-content__main-info'>
          <ConsructorRanges />
        </div>
        <ConnectForm />
      </div>
    </div>
  );
};

export default ConsructorPageContent;
