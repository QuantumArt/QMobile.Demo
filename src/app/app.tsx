import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './containers/footer/footer';
import Header from './containers/header';
import NotFound from './pages/not-found';
import Tariffs from './pages/tariffs';
import { IRoute } from './types';
import Services from './pages/services';
import TariffConsructor from './pages/tariff-consructor';
import TariffDetails from './pages/tariff-details';

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
    path: '/tariffs/tariffconstructor',
    element: <TariffConsructor />,
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

function App() {
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
