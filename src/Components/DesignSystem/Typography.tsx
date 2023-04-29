import React from 'react';
import Subsection from "./Subsection";

function Typography() {
    return (
            <Subsection title='Typography'>
                <h1 className="heading-l">Heading L</h1>
                <h2 className="heading-m">Heading m</h2>
                <h3 className="heading-s">Heading s</h3>
                <p className='body-m'>Body m</p>
                <p className='body-s'>Body s</p>
                
                <h1 className="heading-l serif">Heading L serif</h1>
                <h2 className="heading-m serif">Heading m serif</h2>
                <h3 className="heading-s serif">Heading s serif</h3>
                <p className='body-m serif'>Body m serif</p>
                <p className='body-s serif'>Body s serif</p>


                <h1 className="heading-l mono">Heading L mono </h1>
                <h2 className="heading-m mono">Heading m mono </h2>
                <h3 className="heading-s mono">Heading s mono </h3>
                <p className='body-m mono'>Body m mono </p>
                <p className='body-s mono'>Body s mono </p>
            </Subsection>
    );
}

export default Typography;