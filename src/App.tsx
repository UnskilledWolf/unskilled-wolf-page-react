import React from 'react';
import Title from './components/Title';

export default function App()
{
  return (
    <React.Fragment>
      <div className="App">
        <Title />

        <h3>Art</h3>
        <h3>Code</h3>
        <h3>3D</h3>
        <h3 id="about">About</h3>

        <footer>
          <p className="footer-text">© Unskilled Wolf</p>
        </footer>
      </div>
    </React.Fragment>
  );
}