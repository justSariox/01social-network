import style from "../../Pages/Dialogs/Dialogs.module.css";
import {Message} from "../Message/Message";
import {MessagesType} from "../../redux/state";
import {useRef} from "react";


type MessagesPropsType = {
    messages: MessagesType[]
}

export const Messages: React.FC<MessagesPropsType> = ({messages}) => {

    const newMessage = useRef<HTMLTextAreaElement>(null)
    const sendMessage = () => newMessage.current !== null
        ? alert(newMessage.current.value.trim())
        : ''
    const mappedMessages = messages.map(message =>
        <Message key={message.id}
                 icon={message.icon}
                 message={message.message}
        />)

    return (
        <div className={style.messages}>
            <div>{mappedMessages}</div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}