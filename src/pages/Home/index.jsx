import React from 'react';
import './style.scss';
import Typist from 'react-typist';
import Highlight from '../../components/Highlight';

export default function Home() {
    return (
        <div>
            <h1>
                <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}>
                    Hey!
                    <Typist.Backspace count={4} delay={500} />
                    Welcome to C7F2020
                </Typist>
            </h1>
            <article className="home-description">
                <p>Team C7F is hosting a another CTF!</p>
                <h2>
                    When?
                </h2>
                <p>
                    Start Time:
                    {' '}
                    {new Date('9/10/2020').toString()}
                    <br />
                    <br />
                    End Time:
                    {' '}
                    {new Date('11/10/2020').toString()}
                </p>
                <h2>Where?</h2>
                <p>
                    The CTF is online and anyone can take part in it!
                </p>
                <h2>What?</h2>
                <p>
                    We have challenges of various categories including:
                    <ul>
                        <li>Pwn</li>
                        <li>Web</li>
                        <li>Steg</li>
                        <li>Misc</li>
                        <li>Linux</li>
                        <li>Crypto</li>
                        <li>Reversing</li>
                    </ul>
                </p>
                <h2>Flag format?</h2>
                <p>
                    The flag is in the following format:
                    <br />
                    <br />
                    <Highlight>
                        {'C7F{some_string_here}'}
                    </Highlight>
                </p>
                <h2>Sponsors</h2>
                <p>
                    C7F2020 is sponsored by:
                    <ul>
                        <li>Google Cloud</li>
                        <li>HackTheBox</li>
                        <li>TryHackMe</li>
                        <li>Trail of Bits</li>
                    </ul>
                </p>
            </article>
        </div>

    );
}
