import style from './Notification.module.css'

type NotificationPropsType = {

}

export const Notification: React.FC<NotificationPropsType> = (props) => {
    return (
        <div className={style.HeaderNotification}>
            <img className={style.NotificationLogo} src="https://img.crx4chrome.com/e7/e3/9a/jlenfhlobcbhnjncbnobmpadmmfelgmd-icon.png" alt="Notification"/>
        </div>
    )
}