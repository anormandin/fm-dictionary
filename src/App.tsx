import React from "react";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import SearchField from "./Components/SearchField/SearchField";
import {Outlet} from "react-router-dom";
import {useThemeContext} from "./hooks/ThemeContext";
import './app.scss';
import clsx from "clsx";


function App() {
    const {lightMode, font} = useThemeContext();

    return (
        <div className={clsx('app', lightMode, font)}>
            <div className='main-container'>
                <HeaderBar/>
                <SearchField/>
                <Outlet/>
            </div>
        </div>
    )
}

export default App
