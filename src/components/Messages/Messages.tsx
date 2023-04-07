import style from "../../Pages/Dialogs/Dialogs.module.css";
import {Message} from "../Message/Message";
import {MessagesType} from "../../redux/state";


type MessagesPropsType = {
    messages: MessagesType[]
}

export const Messages: React.FC<MessagesPropsType> = ({messages}) => {

    const mappedMessages = messages.map(message => <Message key={message.id} icon={message.icon} message={message.message}/>)

    return (
        <div className={style.messages}>
            {mappedMessages}
        </div>
    )
}