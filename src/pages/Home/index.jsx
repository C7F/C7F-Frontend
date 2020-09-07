import React from 'react';
import './style.scss';
import Typist from 'react-typist';

import Highlight from '../../components/Highlight';
import { Heading1, Heading2 } from '../../components/Heading';

export default function Home() {
    return (
        <div>
            <Heading1 type="error">
                <Typist
                    avgTypingDelay={40}
                    cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                >
                    Hey!
                    <Typist.Backspace count={4} delay={300} />
                    Welcome to C7F2020
                </Typist>
            </Heading1>
            <article className="home-description">
                <div>Team C7F is hosting a another CTF!</div>
                <br />
                <Heading2 type="primary">
                    <Typist
                        avgTypingDelay={40}
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                        <Typist.Delay ms={1700} />
                        When?
                    </Typist>
                </Heading2>
                <div className="home-text">
                    Start Time:
                    {' '}
                    {new Date('9/10/2020').toString()}
                    <br />
                    <br />
                    End Time:
                    {' '}
                    {new Date('11/10/2020').toString()}
                </div>
                <Heading2 type="primary">
                    <Typist
                        avgTypingDelay={40}
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                        <Typist.Delay ms={1900} />
                        Where?
                    </Typist>
                </Heading2>
                <div className="home-text">
                    The CTF is online and anyone can take part in it!
                </div>
                <Heading2 type="primary">
                    <Typist
                        avgTypingDelay={40}
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                        <Typist.Delay ms={2100} />
                        What?
                    </Typist>
                </Heading2>
                <div className="home-text">
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
                </div>
                <Heading2 type="primary">
                    <Typist
                        avgTypingDelay={20}
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                        <Typist.Delay ms={2300} />
                        Flag format?
                    </Typist>
                </Heading2>
                <div className="home-text">
                    The flag is in the following format:
                    <br />
                    <br />
                    <Highlight>
                        {'C7F{some_string_here}'}
                    </Highlight>
                </div>
                <Heading2 type="primary">
                    <Typist
                        avgTypingDelay={40}
                        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 300 }}
                    >
                        <Typist.Delay ms={2500} />
                        Sponsors
                    </Typist>
                </Heading2>
                <div className="home-text">
                    C7F2020 is sponsored by:
                    <ul>
                        <li>Google Cloud</li>
                        <li>HackTheBox</li>
                        <li>TryHackMe</li>
                        <li>Trail of Bits</li>
                    </ul>
                </div>
            </article>
        </div>

    );
}
