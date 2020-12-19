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
    <React.Fragment>
      <NavBar />
      <div className="App">

        <Title />

        <div className="spacer" />

        <div className="disclaimer">
          <p>Obviously, don't use my code, art, or characters without my permission</p>
        </div>

        <Article image={require("./assets/art.svg")} title="Art" id="art">
          <b>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></b><br />
          I am a relative beginner digital artist, who mainly draws furry characters. While I often draw digitally, I also sometimes draw traditionally. I make Vector Art, Pixel Art, and 3D art. Currently, my main focus is to improve at drawing terrain and expressions. I also plan to animate in the future.
        </Article>

        <Article image={require("./assets/sites.svg")} title="Websites" id="websites">
          I create websites. I commonly use ReactJS for the front end and NodeJS + Express for the backend. I have used Vue and Angular before, but I don't know as much about them. I also know how to use some SQL and No-SQL databases.<br />
          I build this website using ReactJS by myself.
        </Article>

        <Article image={require("./assets/games.svg")} title="Code" id="code">
          I like working with code to make scripts and software. While I am mainly accustomed to high-level languages, I am working on also learning lower-level ones.<br />
          I used to create games, but most of them are old and do not reflect my current skill or knowledge. I want to work on something in the future, but my most current work comes from my websites.<br />
          To create games, I used Unity3D, but I have now switched to Godot. I also made some small things in Processing and P5.<br />
          I have some <b>OLD</b> games on <a href="https://ldjam.com/users/gerox">Ludum Dare</a> (I have gotten better since then.)
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
    </React.Fragment>
  );
}



export default App;
