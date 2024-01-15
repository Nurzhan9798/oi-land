import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import React from "react";
import {Link,} from "react-router-dom";
import './styles/index.scss'


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <h1>App</h1>
            <Link to={"/"}>main page</Link>
            <Link to={"/about"}>about page</Link>
            <AppRouter/>

        </div>
    );
};
