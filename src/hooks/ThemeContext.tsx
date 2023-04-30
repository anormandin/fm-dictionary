import {createContext, ReactNode, useContext, useEffect, useState} from "react";

export type LightMode = 'light' | 'dark';
export type Font = 'sans-serif' | 'serif' | 'mono';

export type Theme = {
    lightMode: LightMode;
    font: Font;
    toggleLightMode: () => void;
    setFont: (font: Font) => void;
}

const defaultThemeContext: Theme = {
    lightMode: 'light',
    font: 'sans-serif',
    toggleLightMode: () => {
    },
    setFont: () => {
    }
}

const ThemeContext = createContext<Theme>(defaultThemeContext);

export function useThemeContext() {
    return useContext(ThemeContext);
}

export function ThemeProvider({children}: { children: ReactNode }) {
    const [lightMode, setLightMode] = useState<LightMode>('light')
    const [font, setFont] = useState<Font>('sans-serif');

    // Effect to toggle dark mode on the body when changed
    useEffect(() => {
        document.body.classList.toggle('light', lightMode === 'light');
        document.body.classList.toggle('dark', lightMode === 'dark');
    }, [lightMode]);


    // Effect to set the initial state of dark mode if prefered
    useEffect(() => {
        // Not supported so nothing to do
        if (!window.matchMedia) return;

        const updateThemeMode = (preferDarkMode: boolean) => {
            setLightMode(preferDarkMode ? 'dark' : 'light');
        }

        const handlePreferedChanged = (evt: MediaQueryListEvent) => {
            updateThemeMode(evt.matches)
        }

        const preferredDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
        updateThemeMode(preferredDarkMedia.matches);

        preferredDarkMedia.addEventListener('change', handlePreferedChanged);


        // Cleanup when unloaded
        return () => {
            preferredDarkMedia.removeEventListener('change', handlePreferedChanged);
        };
        
    }, []);


    const toggleLightMode = () => {
        setLightMode(curr => curr === 'light' ? 'dark' : 'light');
    }
    const themeValue = {
        lightMode,
        font,
        toggleLightMode,
        setFont
    };
    return <ThemeContext.Provider value={themeValue}>
        {children}
    </ThemeContext.Provider>

}


