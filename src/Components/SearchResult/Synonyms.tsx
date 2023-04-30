import React from 'react';

function Synonyms({synonyms}: { synonyms: string[] }) {

    if (synonyms.length === 0) return null;

    return (
        <div className='synonyms flex flex-row align-center mb-2'>
            <h3 className='heading-s text-gray-4 mr-2'>Synonyms</h3>
            <div>
                {synonyms.join(', ')}
            </div>
        </div>
    );
}

export default Synonyms;