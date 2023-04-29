import React from 'react';
import imageError from '../../ressources/images/image-error.svg';
import {DictionaryApiError} from "./DictionaryApiTypes";

function ErrorComponent({apiError}: { apiError?: DictionaryApiError }) {
    return (
        <div className='error'>
            <div className='image-error'>
                <img className='image-error' src={imageError} alt='error'/>
            </div>
            <h1 className='heading-s mb-1'>{apiError?.title || 'An unexpected error occured'}</h1>
            <p className='body-m text-gray-4'>{apiError?.message}</p>
            <p className='body-m text-gray-4'>{apiError?.resolution}</p>
        </div>
    );
}

export default ErrorComponent;