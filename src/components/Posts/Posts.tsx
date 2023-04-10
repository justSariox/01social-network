import {Post} from "../Post/Post";

import style from './Posts.module.css'
import {ActionsType, AddPostActionCreator, PostType, UpdateNewPostActionCreator} from "../../redux/state";
import { KeyboardEvent, ChangeEvent} from "react";


type PostPropsType = {
    posts: PostType[]
    dispatch: (action: ActionsType) => void
    newPostText: string

}



export const Posts: React.FC<PostPropsType> = ({posts, ...props}) => {
    const addPost = () => {
            // props.dispatch({type: "ADD-POST", postText: props.newPostText})
        const action = AddPostActionCreator(props.newPostText) as ActionsType
        props.dispatch(action )
    }

    const OnPressKeyEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
        e.preventDefault()
            addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: e.target.value})
        const action = UpdateNewPostActionCreator(e.currentTarget.value) as ActionsType
        props.dispatch(action)
    }

    const mappedPosts = posts.map(post => <Post key={post.id} Post={post}/>)


    return (
        <div className={style.Posts}>
            <h3>My posts</h3>
            <div>
                <textarea onKeyPress={OnPressKeyEnter} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>add new</button>
            </div>
            {mappedPosts}

        </div>
    )
}