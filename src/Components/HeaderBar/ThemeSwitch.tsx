import React from 'react';
import {useThemeContext} from "../../hooks/ThemeContext";

function ThemeSwitch() {
    const theme = useThemeContext();
    
    return (
        <div className={`theme-switch ${theme.lightMode}`} onClick={theme.toggleLightMode} />
    );
}

export default ThemeSwitch;