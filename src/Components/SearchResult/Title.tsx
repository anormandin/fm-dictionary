import React from 'react';
import PlayButton from "./PlayButton";

interface TitleProperties {
    text: string;
    phonetic?: string;
    audio?: string;
}

function Title({text, phonetic, audio}: TitleProperties) {
    return (
        <div className='title'>
            <div className='left'>
                <h1 className='heading-l'>{text}</h1>
                <h2 className='heading-m text-accent'>{phonetic}</h2>
            </div>
            <div className='right'>
                {audio && <PlayButton url={audio} />}
                
            </div>
        </div>
    );
}

export default Title;