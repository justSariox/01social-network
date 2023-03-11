import {Posts} from "../Posts/Posts";

import style from './Content.module.css'
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";

type ContentPropsType = {}



export const Content: React.FC<ContentPropsType> = (props) => {


    return (
        <div className={style.ContentBlock}>
            <ProfileInfo/>
            <Posts />
        </div>
    )
}