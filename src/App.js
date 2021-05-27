import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produk from './components/pages/Produk';
import Acara from './components/pages/Acara';
import Prakerja from './components/pages/Prakerja';
import Artikel from './components/pages/Artikel';
import Cart from './components/pages/Cart';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/produk' component={Produk}/>
          <Route path='/acara' component={Acara}/>
          <Route path='/prakerja' component={Prakerja} />
          <Route path='/artikel' component={Artikel} />
          <Route path='/cart' component={Cart} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
