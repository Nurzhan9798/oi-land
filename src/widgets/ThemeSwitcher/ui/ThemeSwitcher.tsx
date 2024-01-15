import {useTheme} from "app/providers/ThemeProvider";
import classNames from "classnames";
import React from "react";
import {Button} from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, [className])}
        >
            Toggle
        </Button>
    );
};
