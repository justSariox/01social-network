import { NavLink } from 'react-router-dom'
import style from './HeaderMenu.module.css'

type HeaderMenuPropsType = {

}

export const HeaderMenu: React.FC<HeaderMenuPropsType> = (props) => {
    return (
        <div className={style.HeaderLinks}>
            <NavLink to={"/profile"}>Home </NavLink>
            <NavLink to={"#"}>News</NavLink>
            <NavLink to={"/dialogs"}>Messages </NavLink>
        </div>
    )
}