import style from "./Contacts.module.css"
import {Contact} from "../Contact/Contact";
import {ContactType} from "../../redux/state";

type ContactsPropsType = {
    contacts: ContactType[]
}

export const Contacts: React.FC<ContactsPropsType> = ({contacts}) => {

    const mappedContacts = contacts.map(contact => <Contact key={contact.id} name={contact.name}  id={contact.id}/>)

    return (
        <div className={style.dialogsList}>
            <ul>
                {mappedContacts}
            </ul>
        </div>
    )
}