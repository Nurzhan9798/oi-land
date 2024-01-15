import classNames from "classnames";
import {ButtonHTMLAttributes} from "react";
import cls from './Button.module.scss'

export type ButtonTheme = 'clear';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'clear',
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, [className, [cls[theme]]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
