import React from 'react';
import { Countries } from './components/countries/countries.component';
import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';
import './index.scss';
import { Body } from './components/body/body.component';

function App() {
  return (
      <>
          <Header />
          <Body>
            <Countries />
          </Body>
          <Footer />
      </>
  );
}

export default App;
