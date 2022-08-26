import React from 'react'
import LinkBox from './LinkBox'
import { SiDeviantart, SiGithub, SiTwitter, SiInstagram, SiSteam, SiTwitch } from 'react-icons/si';

export default function Links()
{
    return (
        <div className="links">
            <h2>Links</h2>
            <div className="collection">
                <LinkBox link="https://www.deviantart.com/hexagonal192" icon={<SiDeviantart />} at="hexagonal192" />
                <LinkBox link="https://www.twitch.tv/unskilled_wolf" icon={<SiTwitch />} at="Unskilled_Wolf" />
                <LinkBox link="https://github.com/UnskilledWolf" icon={<SiGithub />} at="UnskilledWolf" />
                <LinkBox link="https://twitter.com/Unskilled_Wolf" icon={<SiTwitter />} at="@Unskilled_Wolf" />
                <LinkBox link="https://steamcommunity.com/id/unskilled_wolf" icon={<SiSteam />} at="Unskilled Wolf" />
                {/* <LinkBox link="https://osu.ppy.sh/users/15434782" icon={<b>osu!</b>} at="UnskilledWolf" /> */}
                <LinkBox link="https://www.instagram.com/furryboi.git" icon={<SiInstagram />} at="@furryboi.git" />
            </div>
        </div>
    )
}
