import React from 'react';
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';

import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App()
{
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>

        <footer>
          <p className="footer-text">© Unskilled Wolf</p>
          <Particles className="particle-footer" params={PARTICLE_PARAMS} />
        </footer>
      </div>
    </React.Fragment>
  );
}



export default App;
