import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import React from "react";
import './styles/index.scss'
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


export const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Navbar/>
            <main className="main">
                <Sidebar/>
                <AppRouter/>
            </main>
        </div>
    );
};
