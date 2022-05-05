import React, { FC, useState } from 'react';
import Arrow from '../../assets/icons/RightArrowFilters.svg';

type Props = {
  title: string;
  iconOpened?: JSX.Element;
  iconClosed?: JSX.Element;
  body: JSX.Element;
  iconPosition?: 'right' | 'left';
};

const Accordion: FC<Props> = ({
  title,
  iconOpened,
  body,
  iconClosed,
  iconPosition,
}) => {
  const [isActive, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(!isActive);
  };

  return (
    <div className="accordion">
      <div
        className={`accordion__header ${
          iconPosition === 'right'
            ? 'accordion__header--icon-right'
            : 'accordion__header--icon-left'
        }`}
        onClick={onClickHandler}
      >
        <p className="accordion__title">{title}</p>
        {isActive ? iconOpened : iconClosed}
      </div>
      <div
        className={`accordion__body ${isActive && 'accordion__body--active'}`}
      >
        {body}
      </div>
    </div>
  );
};

Accordion.defaultProps = {
  iconOpened: (
    <img
      src={Arrow}
      alt="icon"
      style={{
        transform: 'rotate(90deg)',
        width: '7px',
        height: '12px',
      }}
    />
  ),
  iconClosed: (
    <img
      src={Arrow}
      alt="icon"
      style={{
        transform: 'rotate(-90deg)',
        width: '7px',
        height: '12px',
      }}
    />
  ),
  iconPosition: 'right',
};

export default Accordion;
