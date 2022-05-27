import React from 'react';

type Props = { title: string; description: string };

const ToggleData = ({ title, description }: Props): JSX.Element => {
  return (
    <div className="">
      <div className="">
        <p className="">{title}</p>
      </div>
      <div className="">
        <p className="connect-form__toggle-description">{description}</p>
      </div>
    </div>
  );
};

export default ToggleData;
