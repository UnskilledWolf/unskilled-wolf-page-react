import React from 'react';
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';

function App()
{
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
        </Switch>
      </div>
    </React.Fragment>
  );
}



export default App;
