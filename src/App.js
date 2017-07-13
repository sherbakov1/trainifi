import React from 'react';
import HiddenScreenContainer from './components/HiddenScreenContainer';
import FormContainer from './components/FormContainer';
import Footer from './components/Footer';
import Logo from './components/Logo';
import './App.css';

const App = () =>
    <div className="wrap">
      <div className="background"></div>
      <HiddenScreenContainer />
      <div className="container-main">
        <div className="container-content">
          <Logo size='big'/>
          <FormContainer />
        </div>
        <Footer />
      </div>
    </div>

export default App;
