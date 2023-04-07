import {Post} from "../Post/Post";

import style from './Posts.module.css'
import {PostType} from "../../redux/state";
import {useRef} from "react";


type PostPropsType = {
    posts: PostType[]
}

export const Posts: React.FC<PostPropsType> = ({posts}) => {
    let newPost = useRef<HTMLTextAreaElement>(null)
    const addPost = () => newPost.current !== null ? alert(newPost.current.value) : ''

    const mappedPosts = posts.map((post, index) => <Post key={index} Post={post}/>)





return (
    <div className={style.Posts}>
        <h3>My posts</h3>
        <div>
            <textarea ref={newPost} placeholder={'what are you want say'}/>
            <button onClick={addPost}>add new</button>
        </div>
        {mappedPosts}

    </div>
)
}