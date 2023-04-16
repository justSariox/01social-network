import React from "react";
import style from './Dialogs.module.css'
import {Messages} from "../../components/Messages/Messages";
import {Contacts} from "../../components/Contacts/Contacts";
import {ActionsType, DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    DialogsPageState: DialogsPageType
    dispatch: (action: ActionsType) => void
}


export const Dialogs: React.FC<DialogsPropsType> = ({DialogsPageState, dispatch}) => {
    debugger

    return (
        <div className={style.structure}>
            <Contacts contacts={DialogsPageState.contacts }/>
            <Messages messages={DialogsPageState.messages } dispatch={dispatch} newMessageText={DialogsPageState.newMessageText}/>
        </div>
    )
}