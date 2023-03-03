import style from './SidebarMenu.module.css'

export const SidebarMenu = () => {
    return (
        <ul className={style.NavMenu}>
            <li className={style.NavLink}>Home</li>
            <li className={style.NavLink}>News</li>
            <li className={style.NavLink}>Message</li>
            <li className={style.NavLink}>Friends</li>
            <li className={style.NavLink}>Groups</li>
            <li className={style.NavLink}>Photos</li>
            <li className={style.NavLink}>Videos</li>
            <li className={style.NavLink}>Files</li>
        </ul>
    )
}