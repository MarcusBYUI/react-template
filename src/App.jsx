import React from 'react';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <Header />

      <main>

        <Home />

      </main>
      <Footer />
    </>
  );
}

export default App;
