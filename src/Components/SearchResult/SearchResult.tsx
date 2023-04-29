import React from 'react';
import Title from "./Title";
import {LoaderFunction, LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import Meaning from "./Meaning";
import {DictionaryApiResults, DictionaryApiError} from "./DictionaryApiTypes";
import './searchResult.scss';
import SourceUrl from "./SourceUrl";
import ErrorComponent from "./ErrorComponent";

export const searchResultLoader: LoaderFunction = ({params}: LoaderFunctionArgs) => {
    const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en'
    const search = params.search;
    if (search == null) return {};

    return fetch(`${apiUrl}/${search}`);

    // Uncomment for testing

    // return [{
    //     "word": "keyboard",
    //     "phonetic": "/ˈkiːbɔːd/",
    //     "phonetics": [{"text": "/ˈkiːbɔːd/", "audio": ""}, {"text": "/ˈkiːbɔːd/", "audio": ""}, {
    //         "text": "/ˈkibɔɹd/",
    //         "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
    //         "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
    //         "license": {"name": "BY-SA 3.0", "url": "https://creativecommons.org/licenses/by-sa/3.0"}
    //     }],
    //     "meanings": [{
    //         "partOfSpeech": "noun",
    //         "definitions": [{
    //             "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
    //             "synonyms": [],
    //             "antonyms": []
    //         }, {
    //             "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
    //             "synonyms": [],
    //             "antonyms": []
    //         }, {
    //             "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
    //             "synonyms": [],
    //             "antonyms": []
    //         }],
    //         "synonyms": ["electronic keyboard"],
    //         "antonyms": []
    //     }, {
    //         "partOfSpeech": "verb",
    //         "definitions": [{
    //             "definition": "To type on a computer keyboard.",
    //             "synonyms": [],
    //             "antonyms": [],
    //             "example": "Keyboarding is the part of this job I hate the most."
    //         }],
    //         "synonyms": [],
    //         "antonyms": []
    //     }],
    //     sourceUrls:["https://en.wiktionary.org/wiki/keyboard"],
    // }] as DictionaryApiResults[];

}


function SearchResult() {
    const data = useLoaderData() as DictionaryApiResults[] | DictionaryApiError;
    
    // Check for error first
    if ('resolution' in data ) {
        const error = data as DictionaryApiError;
        return <ErrorComponent apiError={error} />
    }

    if (data?.length === 0) return null;

    const {word, phonetic, phonetics, meanings, sourceUrls} = data[0];


    // Try to find a phonetic with audio if available. if none, default to the base phonetic
    const phoneticWithAudio = phonetics.find(x => !!x.audio);
    const {phoneticText, audioUrl} = phoneticWithAudio ? {
        phoneticText: phoneticWithAudio.text,
        audioUrl: phoneticWithAudio.audio
    } : {phoneticText: phonetic, audioUrl: undefined};


    return (
        <div className='search-result'>
            <Title text={word} phonetic={phoneticText} audio={audioUrl} />
            {meanings.map((x, i) => <Meaning key={i} {...x} />)}
            {sourceUrls?.length > 0 && <SourceUrl url={sourceUrls[0]}/>}

        </div>
    );
}

export default SearchResult;