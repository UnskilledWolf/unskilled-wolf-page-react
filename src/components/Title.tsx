import React from 'react';
import { SiDeviantart, SiGithub, SiTwitch } from 'react-icons/si';
import { GoChevronDown } from 'react-icons/go'

export default function Title()
{
    return (
        <div className="title">
            <div className="logo">
                <img className="logo-img" src="/assets/logo.svg" />
                <h1>Unskilled Wolf</h1>
                <h2>Code, Art, 3D</h2>
            </div>
            <div className="links">
                <div className="links-list">
                    <ul className='link-icons'>
                        <li><SiTwitch /></li>
                        <li><SiDeviantart /></li>
                        <li><SiGithub /></li>
                        <li><GoChevronDown /></li>
                    </ul>
                    <ul className='link-texts'>
                        <li><a href="#">Twitch</a></li>
                        <li><a href="#">DeviantArt</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
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