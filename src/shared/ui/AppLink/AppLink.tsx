import classNames from "classnames";
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'

type AppLinkTheme = 'primary' | 'secondary';
interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        to,
        children,
        theme = 'primary',
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cls.AppLink, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
