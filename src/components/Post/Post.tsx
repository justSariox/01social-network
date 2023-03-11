import style from './Post.module.css'
import {PostType} from "../Posts/Posts";

type PostPropTypes = {
    PostType: PostType
}

export const Post: React.FC<PostPropTypes> = (props) => {
    return (
        <div className={style.Post}>
            <div className={style.PostSender}>
                <img className={style.ProfilePhoto}
                     src={props.PostType.image}
                     alt="photo"/>
                <span>{props.PostType.sender}</span>
                <span>{props.PostType.time}</span>
            </div>
            <div className={style.PostMessage}>
                <span>{props.PostType.message}</span>
            </div>
        </div>
    )
}