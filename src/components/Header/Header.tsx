import {SearchPanel} from "../SearchPanel/SearchPanel";
import {Notification} from "../Notification/Notification";
import {HeaderMenu} from "../HeaderMenu/HeaderMenu";
import {ProfileButton} from "../ProfileButton/ProfileButton";
import style from "./Header.module.css"

type HeaderPropsType = {

}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={style.Header}>
            <img className={style.HeaderLogo} src="https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png" alt="logo"/>
            <SearchPanel/>
            <Notification/>
            <HeaderMenu/>
            <ProfileButton/>
        </div>
    );
}