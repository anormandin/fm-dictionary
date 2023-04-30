import React from 'react';
import AppIcon from "./AppIcon";
import FontPicker from "./FontPicker";

import './headerBar.scss';
import ThemeSwitch from "./ThemeSwitch";

function HeaderBar() {
    return (
        <header className='header-bar'>
            <AppIcon />
            <div className='right-side'>
                <FontPicker />
                <ThemeSwitch />
            </div>
        </header>
    );
}

export default HeaderBar;