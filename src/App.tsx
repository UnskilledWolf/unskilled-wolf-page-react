import React from 'react';
import Particles from 'react-particles-js';
import { PARTICLE_PARAMS } from './particleParams';
import NavBar from './components/Navbar';
import Title from './components/Title';
import Article from './components/Article';

function App()
{
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Title />

      <div className="spacer" />

      {/* TODO Animate Articles */}

      <Article image={require("./assets/art.svg")}>
        <b>You can see my art on my <a href="https://deviantart.com/hexagonal192">DeviantArt</a></b><br />
        I mainly draw furry characters, but I also create some vector and pixel art, and I am slowly starting to draw terrain and animations.
      </Article>

      <Article image={require("./assets/sites.svg")}>
        I create websites. I use ReactJS for the front end and NodeJS + Express for the backend. I also have used Vue and Angular before, but I don't know as much about them.<br />
                        I obviously created this website myself.
      </Article>

      <Article image={require("./assets/games.svg")}>
        I used to create games, but most of them are old and do not reflect my current skill and knowledge. I want to work on something in the future, but my most current work comes from my websites.<br />
        To create games, I used Unity3D, but I have now switched to Godot. I also made some small things in Processing and P5.<br />
        I also have some <b>OLD</b> games on <a href="https://ldjam.com/users/gerox">Ludum Dare</a> (As I said, Old and Simple Games)
      </Article>

      <div className="filler">
        <h1>HTML Ipsum Presents</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. in turpis pulvinar facilisis. Ut felis.</p>

        <h2>Header Level 2</h2>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

        <h3>Header Level 3</h3>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </div>

      <footer>
        <p className="footer-text">© Unskilled Wolf</p>
        <Particles className="particle-footer" params={PARTICLE_PARAMS} />
      </footer>
    </div>
  );
}



export default App;
