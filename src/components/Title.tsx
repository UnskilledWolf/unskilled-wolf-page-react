import React from 'react';
import { PARTICLE_PARAMS } from '../particleParams';
import Particles from 'react-particles-js';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

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
                        <div className="title-container">
                            <Timeline totalProgress={progress} paused>
                                <div className="title" style={{ backgroundImage: `url(${require("../assets/index_cover_paralax.png")})` }}>
                                    <Tween
                                        from={{ left: "0%" }}
                                        to={{ left: "100%" }}
                                    >
                                        <div className="title-deco">
                                            <div className="scroll-hint">
                                                <p>
                                                    Scroll Down <br />
                                                    <img className="icon" src={require("../assets/scroll-icon.svg")} />
                                                </p>
                                            </div>
                                            <Particles className="particle-footer" params={PARTICLE_PARAMS} />
                                        </div>
                                    </Tween>
                                    <div className="title-text">
                                        <h1>Unskilled Wolf</h1>
                                        <small>aka Hexagonal193</small>
                                    </div>
                                    <Timeline target={
                                        <div className="title-extra">
                                            <ul>
                                                <li>Art</li>
                                                <li>Code</li>
                                                <li>Games</li>
                                            </ul>
                                        </div>}>
                                        <Tween
                                            from={{ opacity: "0", transform: "translate(-50%,0%)" }}
                                            to={{ opacity: "1", transform: "translate(-50%,-50%)" }}
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