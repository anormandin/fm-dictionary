import React from 'react';
import Definition, {DefinitionProperties} from "./Definition";
import Synonyms from "./Synonyms";

export interface MeaningProperties {
    partOfSpeech: string;
    definitions: DefinitionProperties[];
    synonyms: string[];
}

function Meaning({partOfSpeech, definitions, synonyms}: MeaningProperties) {
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
            <Synonyms synonyms={synonyms} />
        </div>
    );
}

export default Meaning;