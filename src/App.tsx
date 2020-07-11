import React from 'react';
import { Countries } from './components/countries/countries.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import { Country } from './components/country/country.component';
import './index.scss';

function App() {
  return (
      <>
          <Header />
          <Countries />
          <Footer />
      </>
  );
}

export default App;
