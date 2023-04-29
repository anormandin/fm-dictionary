import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import './styles/main.scss'
import DesignSystem from "./Components/DesignSystem/DesignSystem";
import SearchResult, {searchResultLoader} from "./Components/SearchResult/SearchResult";
import ErrorComponent from './Components/SearchResult/ErrorComponent';
import {ThemeProvider} from "./hooks/ThemeContext";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        ErrorBoundary: () => <ErrorComponent/>,
        children: [{
            path: ':search',
            ErrorBoundary: () => <ErrorComponent/>,
            loader: searchResultLoader,
            element: <SearchResult/>
        }]
    },
    {
        path: 'designsystem',
        element: <DesignSystem/>
    }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
