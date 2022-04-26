import React from 'react';
import {
  BrowserRouter as Router,  Route, Routes
} from "react-router-dom";
import './App.scss'
import Footer from './containers/Footer';
import Header from './containers/Header';
import NotFound from './components/NotFound';
import Tariffs from './pages/Tariffs';
import {IRoute} from './types'
import Services from './pages/Services';

const routes: IRoute[] = [
  {
    path: '/tariffs/*',
    element: <Tariffs />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

function App() {
  return (
    <Router>
     <Header />
     <main className='main container'>      
       <Routes>
        {routes.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
      </Routes>
      </main>
     <Footer />
    </Router>
  );
}

export default App;
