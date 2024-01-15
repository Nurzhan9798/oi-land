import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light';
export const ThemeProvider:FC<React.PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultValue: ThemeContextProps = useMemo(() => {
        return {
            theme,
            setTheme
        }
    },[theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};
