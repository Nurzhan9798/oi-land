import {Suspense, useContext} from "react";
import {Link, Route, Routes,} from "react-router-dom";
import {AboutPageAsync} from "./AboutPage.async";
import {MainPageAsync} from "./MainPage.async";
import {ThemeContext} from "./theme/ThemeContext";

export const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    // const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((theme === 'light') ? 'dark' : 'light');
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <h1>App</h1>
            <Link to={"/"}>main page</Link>
            <Link to={"/about"}>about page</Link>
            <Suspense>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync />}/>
                    <Route path={"/about"} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>

        </div>
    );
};
