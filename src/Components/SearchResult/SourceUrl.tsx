import React from 'react';

function SourceUrl({url}: { url: string }) {
    return (
        <div className='sourceUrl'>
           <span>Source</span> 
            <a href={url} target='_blank'>{url}</a>
            <div className='open-in-new' />
        </div>
    );
}

export default SourceUrl;