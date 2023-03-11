import style from "../../Pages/Dialogs/Dialogs.module.css";

type MessagesPropsType = {

}

export const Messages: React.FC<MessagesPropsType> = () => {
    return (
        <div className={style.messages}>
            <div className={style.message}>
                <img className={style.messageIcon} src="https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png" alt="logo"/>
                <span>dfgfgdfgfgddfgfgdfgfgd</span>

            </div>
            <div className={style.message}>
                <img className={style.messageIcon} src="https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png" alt="logo"/>
                <span>dfgfgdfgfgddfgfgdfgfgd</span>

            </div>
            <div className={style.message}>
                <img className={style.messageIcon} src="https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png" alt="logo"/>
                <span>dfgfgdfgfgddfgfgdfgfgd</span>

            </div>

        </div>
    )
}