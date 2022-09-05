import React, { useState } from 'react';
import Article from './components/Article';
import Links from './components/Links';
import Title from './components/Title';
import { MdOutlineArrowBack } from 'react-icons/md'

/**
 * Main entry point of the single-page site
 * @component
 */
export default function App()
{
  // Track weather the code article is flipped or not
  const [flipCodeArticle, setFlipCodeArticle] = useState(false)

  return (
    <React.Fragment>
      <div className="App">
        <Title />

        <div className="separator" />

        <div className="articles">
          <Article id="code" title='Code' image='/images/Code.png' flippable flipped={flipCodeArticle}>
            <div className="front">
              <p>I have experience in various computer fields. From web design to game making, I have worked on many things.</p>
              <p>Some of my projects have included creating games using engines like Godot and Unity3D in C#. Then, using Typescript, I halve also designed React websites and express.js backends. I'm also able to create scripts to automate many tasks in Python.</p>
              <p>A list of fields that I have experimented with recently is <button className="button-link" onClick={() => { setFlipCodeArticle(!flipCodeArticle) }}>here</button>.</p>
              <p>A collection of portfolio projects will be included here in the future. Meanwhile, you can find this site's source code on <a href="https://github.com/UnskilledWolf/unskilled-wolf-page-react">GitHub</a>.</p>
            </div>
            <div className="back">
              <ul>
                <li>Games in Unity3D(C#) and Godot(GDScript); some are published for the Ludum Dare Game Jam</li>
                <li>Websites using React; many with a focus on aesthetics, archived using the help of Sass</li>
                <li>REST and GraphQL APIs using Typescript</li>
                <li>Databases using MariaDB, SQLite, and MongoDB</li>
                <li>Visualizations in P5.js and Processing 3/4(Java)</li>
                <li>Various adventures in Linux, including personal PC use and basic server setups</li>
                <li>Tic-80 games in Lua</li>
              </ul>
              <button className="button-link" onClick={() => { setFlipCodeArticle(!flipCodeArticle) }}><MdOutlineArrowBack /></button>
            </div>
          </Article>
          <Article id="art" title="Art" image='/images/Art.png'>
            <p>I create digital and occasionally traditional art. While my skills in this field are still in need of improvement, I strive to enhance my methods with each artwork.</p>
            <p>In addition to 2D art, I'm also able to create vector graphic designs. Another medium that I sometimes work with is video editing and visual effects. It is my plan to also learn 2D animation in the future.</p>
            <p>Some software that I am familiar with includes Adobe Photoshop, Adobe Illustrator, Adobe After Effects, and Procreate.</p>
          </Article>
          <Article id="3d" title="3D" image='/images/3D.png'>
            <p>In addition to 2D forms of digital media, I'm also working to create 3D artworks using Blender. These projects have ranged from rigged character models to decorated rooms and small landscapes. This included the VTuber model, that I use in my live streams and VRChat, for example.</p>
            <p>I especially like to create procedural materials, and recently, I have also enjoyed working on many projects using geometry nodes.</p>
          </Article>
        </div>

        <div className="separator" />
        <Links />
        <div className="separator" />
        <div id="about">
          <h2>About</h2>
          <p>Ever since a joke caused by a streak of unfavorable games in Apex Legends, I have went by the username UnskilledWolf. Alternatively, I sometimes go by Axiom; the anthro wolf character representing me online.</p>
          <p>I work on many different types of projects, mostly to do with computers. This has led me to experiment with code, art, 3d modeling, animation, system administration, databases, lower-level programming, complex-ish math, electronics, and recently even music. Although I am only proficient at some of them, I enjoy working on many different types of work (As long as I can remain seated in a chair). In addition to that, almost everything that I know is self-taught!</p>
          <p>I also enjoy playing video games such as Minecraft, Noita, Factorio, Titanfall2, Apex Legends, Tetris, and many others. For half a year, I streamed Noita daily on <a href="https://www.twitch.tv/unskilled_wolf">Twitch</a>. Now I only do the occasional stream.</p>
          <p><i>All my creations exclusively belong to me, unless otherwise stated in it's license. Please respect my ownership of my work.</i></p>
          <h3>Contact:</h3>
          <p>
            axiom &#91;at&#93; &lt;this site's domain&gt;
            <br />
            (E-Mail obscured for security reasons)
          </p>
        </div>
        <div id="bottom-img" />
        <footer>
          <p className="footer-text">© Unskilled Wolf</p>
        </footer>
      </div>
    </React.Fragment>
  );
}