import style from './ProfileInfo.module.css'

type ProfileInfoPropsType = {

}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = () => {
    return (
        <div className={style.ProfileInfo}>
            <div className={style.UserInfo}>
                <img style={{width: '64px', height: '64px'}} src="https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg"
                     alt={''}/>
                <span>username</span>
            </div>
            <div className={style.UserDescription}>
                <span>date of bird</span>
                <span>city</span>
                <span>description</span>
            </div>
        </div>
    )
}