import React from 'react';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Article from './components/Article';
import About from './components/About';
import Links from './components/Links';

function App()
{
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Title />

      <div className="spacer" />

      {/* TODO Animate Articles */}

      <Article image={require("./assets/art.svg")} title="Art">
        <b>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></b><br />
        I mainly draw furry characters, but I also create some vector and pixel art, and I am slowly starting to draw terrain and animations.
      </Article>

      <Article image={require("./assets/sites.svg")} title="Websites">
        I create websites. I use ReactJS for the front end and NodeJS + Express for the backend. I also have used Vue and Angular before, but I don't know as much about them.<br />
                        I obviously created this website myself.
      </Article>

      <Article image={require("./assets/games.svg")} title="Games">
        I used to create games, but most of them are old and do not reflect my current skill and knowledge. I want to work on something in the future, but my most current work comes from my websites.<br />
        To create games, I used Unity3D, but I have now switched to Godot. I also made some small things in Processing and P5.<br />
        I also have some <b>OLD</b> games on <a href="https://ldjam.com/users/gerox">Ludum Dare</a> (As I said, Old and Simple Games)
      </Article>

      <div className="seperator" />

      <div className="bottom">
        <About />
        <Links />
      </div>

      <footer>
        <p className="footer-text">© Unskilled Wolf</p>
        <Particles className="particle-footer" params={PARTICLE_PARAMS} />
      </footer>
    </div>
  );
}



export default App;
