import React from 'react';

interface ColorBoxProperties {
    className?: string;

}

function ColorBox({className}: ColorBoxProperties) {
    return (
        <div className='colorbox'>
            <div className={className}/>
            <p className='body-m'>{className}</p>
        </div>
    );
}

export default ColorBox;