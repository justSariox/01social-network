import style from './ProfileButton.module.css'

export const ProfileButton = () => {
    return (
        <div className={style.HeaderUser}>
            <img className={style.UserIcon} src="https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg" alt=""/>
        </div>
    )
}