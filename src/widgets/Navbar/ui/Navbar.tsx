import classNames from "classnames";
import React from "react";
import Logo from 'shared/assets/icons/YU-logo.png';
import {AppLink} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls.Navbar, [className])}>
            <AppLink to="/">
                <img src={Logo} width={148} height={40} alt=""/>
            </AppLink>
            <div className={cls.links}>
                <AppLink
                    to={"/"}
                    theme="secondary"
                >
                    Main page
                </AppLink>
                <AppLink
                    to={"/about"}
                    theme="secondary"
                >
                    About page
                </AppLink>
            </div>
        </div>
    );
};
