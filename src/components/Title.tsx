import React from 'react';
import { PARTICLE_PARAMS } from '../particleParams';
import Particles from 'react-particles-js';

export interface TitleProps
{

}

export interface TitleState
{

}

class Title extends React.Component<TitleProps, TitleState> {

    render()
    {
        return (
            <div className="title-container">
                <div className="title" style={{ backgroundImage: `url(${require("../assets/index_cover_paralax.png")})` }}>
                    <div className="title-text">
                        <h1>Unskilled Wolf</h1>
                        <small>aka Hexagonal193</small>
                    </div>
                </div>
                <div className="title-deco">
                    <Particles className="particle-footer" params={PARTICLE_PARAMS} />
                </div>
            </div>
        );
    }
}

export default Title;