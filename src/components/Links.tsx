import React, { Component } from 'react'
import LinkBox from './LinkBox'
import { SiDeviantart, SiGithub, SiTwitter, SiInstagram } from 'react-icons/si';

export default class Links extends Component
{
    render()
    {
        return (
            <div className="links">
                <h2>Links</h2>
                <div className="collection">
                    <LinkBox link="https://github.com/UnskilledWolf" title={<SiGithub />} at="UnskilledWolf" color="#24292E" tcolor="#ffffff" />
                    <LinkBox link="https://www.deviantart.com/hexagonal192" title={<SiDeviantart />} at="hexagonal192" color="#00E59B" tcolor="#000000" />
                    <LinkBox link="https://twitter.com/Unskilled_Wolf" title={<SiTwitter />} at="@Unskilled_Wolf" color="#1DA1F2" tcolor="#ffffff" />
                    <LinkBox link="https://www.instagram.com/furryboi.git" title={<SiInstagram />} at="@furryboi.git" color="#CD317D" tcolor="#ffffff" />
                </div>
            </div>
        )
    }
}
