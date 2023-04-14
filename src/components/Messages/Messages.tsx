import style from "../../Pages/Dialogs/Dialogs.module.css";
import {Message} from "../Message/Message";
import {ActionsType, AddMessageActionCreator, MessagesType, UpdateMessageTextActionCreator} from "../../redux/state";
import {ChangeEvent, KeyboardEvent, useRef} from "react";


type MessagesPropsType = {
    messages: MessagesType[]
    dispatch: (action: ActionsType) => void
    newMessageText: string
}

export const Messages: React.FC<MessagesPropsType> = ({messages,dispatch, ...props}) => {

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = UpdateMessageTextActionCreator(e.currentTarget.value) as ActionsType
        dispatch(action)
    }

    const addMessage = () => {
       const action = AddMessageActionCreator(props.newMessageText) as ActionsType
        dispatch(action)
    }

    const OnPressKeyEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addMessage()
        }
    }
    const mappedMessages = messages.map(message =>
        <Message key={message.id}
                 icon={message.icon}
                 message={message.message}
        />)

    return (
        <div className={style.messages}>
            <div>{mappedMessages}</div>
            <div>
                <textarea value={props.newMessageText} onChange={onChangeTextArea} onKeyPress={OnPressKeyEnter}> </textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}