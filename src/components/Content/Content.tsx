import {Posts} from "../Posts/Posts";

import style from './Content.module.css'
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";

export const Content = () => {
    return (
        <div className={style.ContentBlock}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}