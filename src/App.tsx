import React from 'react';
import NavBar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';
import { GraphQLClient } from 'graphql-request'

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Image from './pages/Image';

const SERVER_URL = "https://graphql.fauna.com/graphql";
const client = new GraphQLClient(SERVER_URL, {
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_READ_ONLY_KEY}`
  }
})


function App()
{
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact render={(props) =>
            <Gallery
              {...props}
              GQLClient={client}
              key="gallery"
            />
          } />
          <Route path="/gallery/img/:id" render={(props) =>
            <Image
              {...props}
              GQLClient={client}
              key={"img/" + props.match.params.id}
            />
          } />
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
