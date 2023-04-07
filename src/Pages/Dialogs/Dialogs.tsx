import React from "react";
import style from './Dialogs.module.css'
import {Messages} from "../../components/Messages/Messages";
import {Contacts} from "../../components/Contacts/Contacts";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    DialogsPageState: DialogsPageType
}


export const Dialogs: React.FC<DialogsPropsType> = ({DialogsPageState}) => {


    return (
        <div className={style.structure}>
            <Contacts contacts={DialogsPageState.contacts}/>
            <Messages messages={DialogsPageState.messages}/>
        </div>
    )
}