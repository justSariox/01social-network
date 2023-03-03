import {SidebarMenu} from "../SidebarMenu/SidebarMenu";

import style from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={style.Sidebar}>
            <SidebarMenu/>
        </div>
    )
}