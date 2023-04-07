import style from './Post.module.css'

import { PostType } from '../../redux/state';
import React from "react";

type PostPropTypes = {
    Post: PostType
}

export const Post: React.FC<PostPropTypes> = ({Post}) => {

    return (
        <div className={style.Post}>
            <div className={style.PostSender}>
                <img className={style.ProfilePhoto}
                     src={Post.image}
                     alt="photo"/>
                <span>{Post.sender}</span>
                <span>{Post.time}</span>
            </div>
            <div className={style.PostMessage}>
                <span>{Post.message}</span>
                <div>likes: {Post.likesCount}</div>
            </div>
        </div>
    )
}