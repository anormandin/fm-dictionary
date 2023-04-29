import React from 'react';
import Subsection from "./Subsection";
import ColorBox from "./ColorBox";

function Colors() {
    const colors = [
        'black', 
        'gray-1',
        'gray-2',
        'gray-3',
        'gray-4',
        'gray-5',
        'gray-6',
        'white',
        'accent',
        'danger',
    ];
    return (
            <Subsection title='Colors'>
                <div className='flex flex-wrap'>
                    {colors.map(c => <ColorBox key={c} className={c} />)}
                </div>
                    {colors.map(c => <p key={c} className={`heading-m text-${c}`}>text-{c}</p>)}
            </Subsection>
    );
}

export default Colors;