import React from 'react';
import {
  BrowserRouter as Router,  Route, Routes
} from "react-router-dom";
import './App.scss'
import Footer from './containers/Footer';
import Header from './containers/Header';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import NotFound from './components/Test1';

function App() {
  return (
    <Router>
     <Header />
     <main>      
       <Routes>
        <Route path="/tariffs" element={<Test1 />} />
        <Route path="/services" element={<Test2 />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </main>
     <Footer />
    </Router>
  );
}

export default App;
