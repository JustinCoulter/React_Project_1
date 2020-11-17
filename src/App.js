import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'
import Product from './Views/Product'

function App() {

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        
        {/* <CounterExample /> */}
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />           
            </Route>                 
            <Route path="/about">
              <About />     
            </Route>
            <Route path="/contact">
              <Contact />     
            </Route>
            <Route path="/products/:id">
              <Product />     
            </Route>
          </Switch>
        </div>

      
        <Footer />
      </Router>
    </div>
  );
}

export default App;
