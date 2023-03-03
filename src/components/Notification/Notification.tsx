import style from './Notification.module.css'

export const Notification = () => {
    return (
        <div className={style.HeaderNotification}>
            <img className={style.NotificationLogo} src="https://img.crx4chrome.com/e7/e3/9a/jlenfhlobcbhnjncbnobmpadmmfelgmd-icon.png" alt="Notification"/>
        </div>
    )
}