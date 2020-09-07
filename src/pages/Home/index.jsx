import React from 'react';
import './style.scss';
import Typist from 'react-typist';

import Highlight from '../../components/Highlight';
import { Heading1, Heading2 } from '../../components/Heading';

export default function Home() {
    return (
        <div>
            <Heading1>
                <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}>
                    Hey!
                    <Typist.Backspace count={4} delay={500} />
                    Welcome to C7F2020
                </Typist>
            </Heading1>
            <article className="home-description">
                <p>Team C7F is hosting a another CTF!</p>
                <Heading2>
                    When?
                </Heading2>
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
                <Heading2>Where?</Heading2>
                <p>
                    The CTF is online and anyone can take part in it!
                </p>
                <Heading2>What?</Heading2>
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
                <Heading2>Flag format?</Heading2>
                <p>
                    The flag is in the following format:
                    <br />
                    <br />
                    <Highlight>
                        {'C7F{some_string_here}'}
                    </Highlight>
                </p>
                <Heading2>Sponsors</Heading2>
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
