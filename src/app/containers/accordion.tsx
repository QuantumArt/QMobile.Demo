import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import Arrow from '../../assets/icons/RightArrowFilters.svg';

type Props = {
  title: string;
  iconOpened?: JSX.Element;
  iconClosed?: JSX.Element;
  body: JSX.Element;
  iconPosition?: 'right' | 'left';
  headerClasses?: string;
  active?: boolean;
};

const Accordion = ({
  title,
  iconOpened,
  body,
  iconClosed,
  iconPosition,
  headerClasses,
  active,
}: Props): JSX.Element => {
  const [isActive, setActive] = useState(active);

  const onClickHandler = (): void => {
    setActive(!isActive);
  };

  useEffect(() => {
    setActive(active);
  }, [active]);

  const accordionHeaderStyles = cn('accordion__header', `${headerClasses}`, {
    'accordion__header--icon-right': iconPosition === 'right',
    'accordion__header--icon-left': iconPosition === 'left',
  });

  const accordionBodyStyles = cn('accordion__body', {
    'accordion__body--active': isActive,
  });

  return (
    <div className="accordion">
      <div
        className={accordionHeaderStyles}
        role="button"
        onClick={onClickHandler}
        tabIndex={0}
        onKeyPress={onClickHandler}
      >
        <p className="accordion__title">{title}</p>
        {isActive ? iconOpened : iconClosed}
      </div>
      <div className={accordionBodyStyles}>{body}</div>
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
  headerClasses: '',
  active: false,
};

export default Accordion;
