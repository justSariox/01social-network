import "../../App.css";
import style from './Dialogs.module.css'
import {Messages} from "../../components/Messages/Messages";
import {Contacts} from "../../components/Contacts/Contacts";

type DialogsPropsType = {}

export const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <div className={style.structure}>
            <Contacts/>
            <Messages/>
        </div>
    )
}