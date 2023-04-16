import {ActionsType, PostType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        {
            id: 1,
            message: 'hello its my first post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:00',
            sender: 'Mikhail',
            likesCount: 5
        },
        {
            id: 2,
            message: 'hello its my second post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:01',
            sender: 'Andrei',
            likesCount: 2
        },
        {
            id: 3,
            message: 'hello its my third post',
            image: "https://icon2.cleanpng.com/20180319/pfq/kisspng-computer-icons-user-social-media-clip-art-user-5aafa93a982435.4617195815214615626232.jpg",
            time: '22:22',
            sender: 'Ksenia',
            likesCount: 999
        }
    ],
    newPostText: ''

}

const ProfileReducer = (state: any = initialState, action: ActionsType) => {
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
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default: return state
    }

}

export const UpdateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const AddPostActionCreator = (post: string) => ({type: ADD_POST, postText: post})


export default ProfileReducer
