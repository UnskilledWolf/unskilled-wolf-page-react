import React, { Component } from 'react'
import LinkBox from './LinkBox'
import { SiDeviantart, SiGithub, SiTwitter, SiInstagram, SiSteam, SiTwitch } from 'react-icons/si';

export default function Links()
{
    return (
        <div className="links">
            <h2>Links</h2>
            <div className="collection">
                <LinkBox link="https://www.deviantart.com/hexagonal192" title={<SiDeviantart />} at="hexagonal192" color="#00E59B" tcolor="#000000" />
                <LinkBox link="https://www.twitch.tv/unskilled_wolf" title={<SiTwitch />} at="Unskilled_Wolf" color="#9147FF" tcolor="#ffffff" />
                <LinkBox link="https://github.com/UnskilledWolf" title={<SiGithub />} at="UnskilledWolf" color="#24292E" tcolor="#ffffff" />
                <LinkBox link="https://twitter.com/Unskilled_Wolf" title={<SiTwitter />} at="@Unskilled_Wolf" color="#1DA1F2" tcolor="#ffffff" />
                <LinkBox link="https://steamcommunity.com/id/unskilled_wolf" title={<SiSteam />} at="Unskilled Wolf" color="#171A21" tcolor="#ffffff" />
                <LinkBox link="https://osu.ppy.sh/users/15434782" title={<b>osu!</b>} at="UnskilledWolf" color="#AC396D" tcolor="#ffffff" />
                <LinkBox link="https://www.instagram.com/furryboi.git" title={<SiInstagram />} at="@furryboi.git" color="#CD317D" tcolor="#ffffff" />
            </div>
        </div>
    )
}
