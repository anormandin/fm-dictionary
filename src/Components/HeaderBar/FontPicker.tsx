import React from 'react';
import Dropdown, {Option} from 'react-dropdown';
import 'react-dropdown/style.css';
import {Font, useThemeContext} from "../../hooks/ThemeContext";

function FontPicker() {
    
    type FontOption = {label:string;value:Font;} & Option;

    const {setFont, font} = useThemeContext();
    const options = [
        {label:'Sans-Serif', value:'sans-serif'},
        {label:'Serif', value:'serif'},
        {label:'Mono', value:'mono'},
    ] as FontOption[];


    const handleChange = (opt: Option) => {
        setFont(opt.value as Font);
    }


    return (
        <Dropdown 
            className='font-picker' 
            options={options} 
            arrowOpen={<div className='arrow-up' /> }
            arrowClosed={<div className='arrow-down' /> }
            onChange={handleChange} 
            value={font}
        />
    );
}

export default FontPicker;