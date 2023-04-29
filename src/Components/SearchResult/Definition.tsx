import React from 'react';

export interface DefinitionProperties {
    definition:string;
    synonyms:string[];
    antonyms:string[];
    example?:string;
}

function Definition({definition, example}:DefinitionProperties) {
    return (
        <div className='definition'>
            {definition}
            {example && <q>{example}</q>}
            
        </div>
    );
}

export default Definition;