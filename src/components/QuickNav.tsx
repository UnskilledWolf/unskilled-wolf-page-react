import React from 'react'
import LinkBox from './LinkBox'
import { SiDeviantart } from 'react-icons/si';
import { ReactComponent as AboutSVG } from '../assets/Icons_About.svg';
import { ReactComponent as GallerySVG } from '../assets/Icons_Gallery.svg';
import { ReactComponent as PlaceholderSVG } from '../assets/Icons_Placeholder.svg'

export default function QuickNav()
{
    return (
        <div className="quick-nav">
            <div className="header">
                <p>Art</p>
                <p>/</p>
                <p>Websites</p>
                <p>/</p>
                <p>Code</p>
            </div>
            <div className="links">
                <div className="collection">
                    <LinkBox link="/#about" title={<AboutSVG />} at="About" color="#181818" tcolor="#00a3b9" />
                    <LinkBox link="/gallery" title={<GallerySVG />} at="Gallery" color="#181818" tcolor="#00a3b9" />
                    <LinkBox link="https://www.deviantart.com/hexagonal192" title={<SiDeviantart />} at="Deviantart" color="#00E59B" tcolor="#000000" />
                    <LinkBox link="/#" title={<PlaceholderSVG />} at="Placeholder" color="#181818" tcolor="#00a3b9" />
                </div>
            </div>
            <div className="footer">
                <p>Quick Navigation</p>
            </div>
        </div>
    )
}
