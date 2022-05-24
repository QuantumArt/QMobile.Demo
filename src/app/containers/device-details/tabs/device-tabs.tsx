import React, { useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import classNames from 'classnames';
import DeviceDescriptionTab from './device-description-tab';
import DeviceFeaturesTab from './device-features-tab';
import devicesStore from '../../../../stores/devices/devices-store';

type TabId = 'description' | 'features' | 'showrooms';

type TabsType = {
  id: TabId;
  title: string;
  content: JSX.Element;
};

const tabsList: TabsType[] = [
  {
    id: 'description',
    title: 'Описание',
    content: <DeviceDescriptionTab />,
  },
  {
    id: 'features',
    title: 'Характеристики',
    content: <DeviceFeaturesTab />,
  },
  {
    id: 'showrooms',
    title: 'Наличие в салонах',
    content: <p>Наличие в салонах</p>,
  },
];

const DeviceDetailsTabs = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabId>('description');

  return (
    <div className="device-details__tabs-container">
      <ul className="device-details__tabs-header">
        {tabsList.map(({ id, title }) => {
          const tabsItemStyles = classNames('device-details__tabs-item', {
            'device-details__tabs-item--active': id === activeTab,
          });

          return (
            <li key={id}>
              <button
                className={tabsItemStyles}
                type="button"
                onClick={() => {
                  setActiveTab(id);
                }}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        {tabsList.map(({ id, content }) =>
          id === activeTab ? <div key={id}>{content}</div> : null,
        )}
      </div>
    </div>
  );
};

export default DeviceDetailsTabs;
