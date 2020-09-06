import React from 'react';
import './style.scss';
import Typist from 'react-typist';

export default function Home() {
    return (
        <div>
            <h1>
                <Typist>
                    Hey!
                    <Typist.Backspace count={4} delay={500} />
                    Welcome to C7F2020
                </Typist>
            </h1>
        </div>

    );
}
