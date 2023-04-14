import {ActionsType, PostType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const ProfileReducer = (state: any, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: Math.random() * 10,
                message: state.newPostText,
                image: '',
                likesCount: Math.ceil(Math.random() * 10),
                time: '0:00',
                sender: 'Artem'
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}

export const UpdateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const AddPostActionCreator = (post: string) => ({type: ADD_POST, postText: post})


export default ProfileReducer
