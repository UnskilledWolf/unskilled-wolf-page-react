import React from 'react'
import LinkBox from './LinkBox'
import { SiDeviantart } from 'react-icons/si';

export default function QuickNav()
{
    return (
        <div className="quick-nav">
            <div className="header">
                <p>Art</p>
                <p>Websites</p>
                <p>Code</p>
            </div>
            <div className="links">
                <div className="collection">
                    <LinkBox link="/#about" title={<SiDeviantart />} at="About" color="#181818" tcolor="#00a3b9" />
                    <LinkBox link="https://www.deviantart.com/hexagonal192" title={<SiDeviantart />} at="Deviantart" color="#00E59B" tcolor="#000000" />
                    <LinkBox link="/gallery" title={<SiDeviantart />} at="Gallery" color="#181818" tcolor="#00a3b9" />
                    <LinkBox link="/#" title={<SiDeviantart />} at="Placeholder" color="#181818" tcolor="#00a3b9" />
                </div>
            </div>
            <div className="footer">
                <p>Quick Nav</p>
            </div>
        </div>
    )
}
