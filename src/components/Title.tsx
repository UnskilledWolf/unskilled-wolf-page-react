import React from 'react';

export default function Title()
{
    return (
        <div className="title">
            <div className="title-deco">
                <div className="title-text">
                    <img src="/assets/logo.svg" alt="Page Logo" />
                    <h1>Unskilled Wolf</h1>
                    <h2>Axiom</h2>
                </div>
                <div className="scroll-hint">
                    <a href="/#art">
                        Scroll Down <br />
                        <img className="icon" alt="" src={"/assets/scroll-icon.svg"} />
                    </a>
                </div>
            </div>
        </div>
    );
}