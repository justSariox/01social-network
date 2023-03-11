import "../../App.css";
import style from './Dialogs.module.css'
import {Messages} from "../../components/Messages/Messages";
import {Contacts} from "../../components/Contacts/Contacts";

export const Dialogs = () => {
    return (
        <div className={style.structure}>
            <Contacts/>
            <Messages/>
        </div>
    )
}