import React from 'react';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';
import NavBar from './components/Navbar';
import Title from './components/Title';

function App()
{
  return (
    <div className="App">
      <NavBar />

      <Title />

      <footer>
        <p className="footer-text">© Unskilled Wolf</p>
        <Particles className="particle-footer" params={PARTICLE_PARAMS} />
      </footer>
    </div>
  );
}



export default App;
