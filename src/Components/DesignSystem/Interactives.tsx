import React from 'react';
import Subsection from "./Subsection";
import SearchField from "../SearchField/SearchField";

function Interactives() {
    return (
        <Subsection title='Interactive Elements'>
            <div className='mb-2'>
                <SearchField />
            </div>
        </Subsection>
    );
}

export default Interactives;