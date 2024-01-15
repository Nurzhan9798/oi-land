import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {Suspense} from "react";
import {Link, Route, Routes,} from "react-router-dom";
import './styles/index.scss'


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <h1>App</h1>
            <Link to={"/"}>main page</Link>
            <Link to={"/about"}>about page</Link>
            <Suspense>
                <Routes>
                    <Route path={"/"} element={<MainPage />}/>
                    <Route path={"/about"} element={<AboutPage />}/>
                </Routes>
            </Suspense>

        </div>
    );
};
