import React from 'react';
import Title from './components/Title';
// import Particles from 'react-tsparticles';

export default function App()
{
  return (
    <React.Fragment>
      <div className="App">
        <Title />

        <footer>
          <p className="footer-text">© Unskilled Wolf</p>
          {/* <Particles className="particle-footer" url="./particles.json" /> */}
        </footer>
      </div>
    </React.Fragment>
  );
}