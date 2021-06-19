import React from 'react';
import { PARTICLE_PARAMS } from '../particleParams';
import Particles from 'react-particles-js';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';
import { ReactComponent as LogoSVG } from '../assets/logo.svg'
import "../logoAnimation.scss"

class Title extends React.Component
{
    render()
    {
        return (
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration={1000}
                    pin
                >
                    {(progress: any) => (
                        <div className="title-container" id="home">
                            <Timeline totalProgress={progress} paused>
                                <div className="title" style={{ backgroundImage: `url(${require("../assets/index_cover_paralax.png")})` }}>
                                    <Tween
                                        from={{ left: "0%" }}
                                        to={{ left: "-75%" }}
                                    >
                                        <div className="title-deco">
                                            <div className="title-text">
                                                <Tween
                                                    from={{ right: "0%", opacity: "1" }}
                                                    to={{ right: "-50%", opacity: "0" }}>
                                                    <LogoSVG id="logo" />
                                                    <h1>Unskilled Wolf</h1>
                                                    <h2>Axiom</h2>
                                                </Tween>
                                            </div>
                                            <div className="scroll-hint">
                                                <p>
                                                    Scroll Down <br />
                                                    <img className="icon" alt="" src={require("../assets/scroll-icon.svg")} />
                                                </p>
                                            </div>
                                            <Particles className="particle-footer" params={PARTICLE_PARAMS} style={{ opacity: "1" }} />
                                        </div>
                                    </Tween>
                                    <Timeline target={
                                        <div className="title-extra">
                                            <ul>
                                                <li>Art</li>
                                                <li>Websites</li>
                                                <li>Code</li>
                                                <li><small>TODO Graphic Here</small></li>
                                            </ul>
                                        </div>}>
                                        <Tween
                                            from={{ opacity: "0", top: "100%" }}
                                            to={{ opacity: "1", top: "50%" }}
                                        />
                                    </Timeline>
                                </div>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller>
        );
    }
}

export default Title;