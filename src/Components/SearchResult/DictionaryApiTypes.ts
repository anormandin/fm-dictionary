export type Phonetic = {
    text:string;
    audio:string;

}
export type Definition = {
    definition:string;
    synonyms:string[];
    antonyms:string[];
    example?:string;

}
export type Meaning = {
    partOfSpeech:string;
    definitions:Definition[];
    synonyms:string[];
    antonyms:string[];
    

}
export type DictionaryApiResults = {
    word:string;
    phonetic:string;
    phonetics:Phonetic[];
    meanings:Meaning[];
    sourceUrls:string[];
}

export type DictionaryApiError = {
    title:string;
    message:string;
    resolution:string;
}