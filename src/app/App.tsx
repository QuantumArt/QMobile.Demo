import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.scss'
import Footer from './containers/Footer';

import Header from './containers/Header';

function App() {
  return (
    <Router>
     <Header />
     <main></main>
     <Footer />
    </Router>
  );
}

export default App;
