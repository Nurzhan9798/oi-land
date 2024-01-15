import classNames from "classnames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(prevState => !prevState)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={toggle}>toggle</button>
            <div className={cls.switchers}
            >
                <ThemeSwitcher/>
            </div>
        </div>
    );
};
