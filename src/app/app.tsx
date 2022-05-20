import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRoute } from './types';

import Footer from './containers/footer/footer';
import Header from './containers/header';
import NotFound from './pages/not-found';
import Services from './pages/services';
import DeviceDetails from './pages/device-details';
import TariffDetails from './pages/tariff-details';
import Tariffs from './pages/tariffs';
import Devices from './pages/devices';
import Packages from './pages/packages';

const routes: IRoute[] = [
  {
    path: '/tariffs/',
    element: <Tariffs />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/devices',
    element: <Devices />,
  },
  {
    path: '/tariff_packages',
    element: <Packages />,
  },

  {
    path: '/devices/*',
    element: <DeviceDetails />,
  },
  {
    path: '/tariffs/*',
    element: <TariffDetails />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <main className="main container">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
