import React, { useEffect } from 'react';
import './components/style/Global.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhereToGo from './components/WhereToGo';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import APICovidByCountyRequestProvider from './contexts/APICovidByCountyRequest';
import Navbar from './components/Navbar';
import Store from './components/Store';
import Basket from './components/Basket';
import Footer from './components/Footer';
import './App.scss';
import CountySelectedProvider from './contexts/CountySelected';
import StoreContextProvider from './contexts/StoreContext';

function App() {
  useEffect(() => {
    const el = document.querySelector('.loader-container');
    if (el) {
      el.remove();
    }
  }, []);

  return (
    <APICovidByCountyRequestProvider>
      <CountySelectedProvider>
        <StoreContextProvider>
          <Router>
            <div className="content">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ou-partir" component={WhereToGo} />
                <Route exact path="/contact">
                  <AboutUs />
                  <ContactForm />
                </Route>

                <Route exact path="/store" component={Store} />
                <Route exact path="/basket" component={Basket} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </StoreContextProvider>
      </CountySelectedProvider>
    </APICovidByCountyRequestProvider>
  );
}

export default App;
