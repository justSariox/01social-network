import {FC} from "react";
import style from "./Message.module.css";

type MessagePropsType = {
    icon: string
    message: string
}

export const Message:FC<MessagePropsType> = ({message, icon}) => {
    return (
        <div className={style.message}>
            <img className={style.messageIcon} src={icon} alt="logo"/>
            <span className={style.messageText}>{message}</span>

        </div>
    )
}