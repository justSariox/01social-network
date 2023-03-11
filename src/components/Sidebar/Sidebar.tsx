import {SidebarMenu} from "../SidebarMenu/SidebarMenu";

import style from './Sidebar.module.css'

type SidebarPropsType = {

}

export const Sidebar: React.FC<SidebarPropsType> = () => {
    return (
        <div className={style.Sidebar}>
            <SidebarMenu/>
        </div>
    )
}