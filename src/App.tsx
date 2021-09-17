import React from 'react';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Article from './components/Article';
import Announcement from './components/Announcement';
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

        <div className="announcements">
          <Announcement>Note: This is still Work In Progress</Announcement>
          <Announcement important>Note: This is still Work In Progress</Announcement>
        </div>

        <div className="main-articles">
          <Article image={require("./assets/art.svg")} title="Art" id="art">
            I am a gradually improving digital artist, who specializes in furry artworks. While I typically draw digitally, I also draw traditionally sometimes. I can also make Vector Art, and 3D art. Currently, my main focus is to improve at expressions. I also plan to animate in the future.<br />
            {/* <a href="http://www.example.com" className="button-link">Art Gallery</a><br /> */}
            You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a>
          </Article>

          <Article image={require("./assets/sites.svg")} title="Websites" id="websites">
            I create websites, and I have experience in full-stack development. I usually use ReactJS for the front end and NodeJS + Express for the backend. I also know how to use some SQL and No-SQL databases.<br />
            I build this website using ReactJS by myself.
          </Article>

          <Article image={require("./assets/games.svg")} title="Code" id="code">
            I like working with code to make scripts and software. While I am mainly accustomed to high-level languages, I am working on also learning lower-level ones.<br />
            I used to create games, but most of them are old and do not reflect my current skill or knowledge. I want to work on something in the future, but my most current work comes from my websites.<br />
            To create games, I used Unity3D, but I have now switched to Godot. I also made some small things in Processing and P5.<br />
            I have some <b>OLD</b> games on <a href="https://ldjam.com/users/gerox">Ludum Dare</a> (I have gotten better since then.)
          </Article>
        </div>

        <div className="separator" />

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
