import React from 'react';
import { SiDeviantart, SiGithub, SiTwitch } from 'react-icons/si';
import { GoChevronDown } from 'react-icons/go'
import { ReactComponent as Background } from '../assets/background.svg'
import { ReactComponent as Logo } from '../assets/hexagon.svg'

export default function Title()
{
    return (
        <div className="title">
            <div className="logo">
                <Logo id="page-logo" />
                <h1>Unskilled Wolf</h1>
                <h2>Code, Art, 3D</h2>
            </div>
            <div className="links">

                {/* SVG for right section of title, split into parts for separate position control's. */}
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-fixed' width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <line className="a" x1="1439.64" y1="785.69" x2="140.6" y2="35.69" />
                    <line className="a" x1="24.13" y1="752.17" x2="1323.16" y2="2.17" />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <polygon id="grid-block-1" className="b" points="702.85 226.72 702.85 226.32 702.51 226.52 649.38 257.19 649.38 437.51 702.53 468.2 702.85 468.38 702.85 468.01 753.16 438.96 753.16 255.76 702.85 226.72" />
                </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-fixed' width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <line className="a" x1="70.93" y1="798.97" x2="1369.96" y2="48.97" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <polygon id="grid-block-2" className="b" points="767.91 313.26 767.91 312.86 767.57 313.06 714.44 343.73 714.44 475.32 767.59 506.01 767.91 506.19 767.91 505.82 818.22 476.77 818.22 342.3 767.91 313.26" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-fixed' width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <line className="a" x1="1392.84" y1="832.49" x2="93.8" y2="82.49" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <polygon id="grid-block-3" className="b" points="640.97 504.45 640.97 504.05 640.63 504.25 587.5 534.92 587.5 589.59 640.65 620.28 640.97 620.46 640.97 620.09 691.28 591.04 691.28 533.5 640.97 504.45" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='svg-fixed' width="1463.77" height="927.2" viewBox="0 0 1463.77 927.2">
                    <line className="a" x1="117.49" y1="845.53" x2="1416.53" y2="95.53" />
                    <line className="a" x1="163.48" y1="891.52" x2="1462.52" y2="141.52" />
                    <line className="a" x1="1300.29" y1="925.04" x2="1.25" y2="175.04" />
                    <line className="c" x1="1346.27" y1="879.05" x2="47.23" y2="129.05" />
                </svg>

                <div className="links-list frost-bg">
                    <a href="https://www.twitch.tv/unskilled_wolf"><SiTwitch /> <span>Twitch</span></a>
                    <a href="https://www.deviantart.com/hexagonal192"><SiDeviantart /> <span>DeviantArt</span></a>
                    <a href="https://github.com/UnskilledWolf"><SiGithub /> <span>GitHub</span></a>
                    <a href="#art"><GoChevronDown /> <span>About</span></a>
                </div>
            </div>
            <div className="scroll-hint">
                <a href="#code">
                    Scroll Down <br />
                    <img className="icon" alt="" src="/assets/scroll-icon.svg" />
                </a>
            </div>
        </div>
    );
}