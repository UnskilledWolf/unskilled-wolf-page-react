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
                <Background />
                <div className="links-list frost-bg">
                    <a href="#"><SiTwitch /> <span>Twitch</span></a>
                    <a href="#"><SiDeviantart /> <span>DeviantArt</span></a>
                    <a href="#"><SiGithub /> <span>GitHub</span></a>
                    <a href="#about"><GoChevronDown /> <span>About</span></a>
                </div>
            </div>
            <div className="scroll-hint">
                <a href="/#art">
                    Scroll Down <br />
                    <img className="icon" alt="" src="/assets/scroll-icon.svg" />
                </a>
            </div>
        </div>
    );
}