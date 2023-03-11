import style from "../../Pages/Dialogs/Dialogs.module.css";

type ContactsPropsType = {

}

export const Contacts: React.FC<ContactsPropsType> = (props) => {
    return (
        <div className={style.dialogsList}>
            <ul>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
                <li>user1</li>
            </ul>
        </div>
    )
}