import {Posts} from "../Posts/Posts";
import style from './Content.module.css'
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ContentPropsType = {
    ProfilePageState: ProfilePageType
}



export const Content: React.FC<ContentPropsType> = ({ProfilePageState}) => {


    return (
        <div className={style.ContentBlock}>
            <ProfileInfo/>
            <Posts posts={ProfilePageState.posts}/>
        </div>
    )
}