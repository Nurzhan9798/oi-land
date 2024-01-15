import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || 'light';
const ThemeProvider:FC<React.PropsWithChildren> = ({children}) => {
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

export default ThemeProvider;
