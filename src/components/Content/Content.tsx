import {Posts} from "../Posts/Posts";
import style from './Content.module.css'
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";


type ContentPropsType = {
    ProfilePageState: ProfilePageType
    dispatch: (action: ActionsType) => void

}



export const Content: React.FC<ContentPropsType> = ({ProfilePageState, dispatch}) => {


    return (
        <div className={style.ContentBlock}>
            <ProfileInfo/>
            <Posts posts={ProfilePageState.posts}
                   dispatch={dispatch}
                   newPostText={ProfilePageState.newPostText}

            />
        </div>
    )
}