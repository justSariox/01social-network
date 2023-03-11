import style from './SidebarMenu.module.css'
import {NavLink} from "react-router-dom";

type SidebarMenuPropsType = {}

type SidebarType = {}


export const SidebarMenu: React.FC<SidebarMenuPropsType> = () => {

    return (
        <ul className={style.NavMenu}>
            <li className={style.NavLink}>
                <NavLink to={'/profile'}
                         className={(navData) => navData ? style.activeLink : style.link}>
                    Profile
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}
                >News
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'/dialogs'}
                         className={(navData) => navData ? style.activeLink : style.link}>
                    Messages
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}>
                    Friends
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}>
                    Groups
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}>
                    Photos
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}>
                    Videos
                </NavLink>
            </li>
            <li className={style.NavLink}>
                <NavLink to={'#'}
                         className={(navData) => !navData ? style.activeLink : style.link}>
                    Files
                </NavLink>
            </li>
        </ul>
    )
}