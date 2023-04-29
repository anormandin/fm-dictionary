import React from 'react';
import clsx from 'clsx';
import './searchField.scss';
import {useMatch,  useNavigate} from "react-router-dom";

function SearchField() {
    const matches = useMatch("/:search");
    
    const navigate = useNavigate();
    const [search, setSearch] = React.useState<string>(matches?.params?.search || '');
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!search) {
            setError('Whoops, can’t be empty…');
            navigate('');
            
        } else {
            navigate(search);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = e.target.value;
        setSearch(currentSearch);
        if (currentSearch) {
            setError(null);
        }
    }

    return (
        <form className='flex flex-column searchField' onSubmit={handleSubmit}>
            <div className="flex flex-row">
                <input
                    name='search'
                    className={clsx('heading-s bold', error && 'error')}
                    type='text'
                    placeholder='Search for any word...'
                    onChange={handleChange}
                    value={search || ""}
                />
                <button type='submit' className='icon-search'/>
            </div>
            {error && <p className='text-danger heading-s mt-1'>{error}</p>}
        </form>
    );
}

export default SearchField;