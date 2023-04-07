import style from "../Contacts/Contacts.module.css";
import {NavLink} from "react-router-dom";
import {FC} from "react";

type ContactPropsType = {
    name: string
    id: number
}

export const Contact: FC<ContactPropsType> = ({name, id}) => {


    const link = `/dialogs/${id}`


    return (
        <li >
            <NavLink
                to={link}

                className={(navData) => navData ? style.activeLink : style.link}
            >
                {name}
            </NavLink>
        </li>
    )
}