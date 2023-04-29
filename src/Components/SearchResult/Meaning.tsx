import React from 'react';
import Definition, {DefinitionProperties} from "./Definition";

export interface MeaningProperties {
    partOfSpeech: string;
    definitions: DefinitionProperties[];
}

function Meaning({partOfSpeech, definitions}: MeaningProperties) {
    return (
        <div className='meaning'>
            <h3 className='part-of-speech heading-m'>
                {partOfSpeech}
                <hr/>
            </h3>
            <h4 className='meanings-section heading-s text-gray-4'>Meaning</h4>
            <ul>
                {definitions.map((x, i) =>
                    <li key={i}><Definition {...x} /></li>
                )}
            </ul>
        </div>
    );
}

export default Meaning;