// let rerenderEntireTree = () => {
//     console.log('state changed')
// }


import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

const msgIcon = 'https://www.iconninja.com/files/873/712/901/bebo-media-network-social-icon.png'

export type PostType = {
    id: number,
    message: string
    image: string,
    time: string,
    sender: string
    likesCount: number
}

export type ContactType = {
    id: number, name: string
}

export type MessagesType = {
    id: number, message: string, icon: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogsPageType = {
    contacts: ContactType[]
    messages: MessagesType[]
    newMessageText: string
}

export type StateType = {
    DialogsPage: DialogsPageType
    ProfilePage: ProfilePageType

}
const ContactList: ContactType[] = [
    {id: 1, name: 'Mikhail'},
    {id: 2, name: 'Ksenia'},
    {id: 3, name: 'Andrei'},
]
const MessagesList: MessagesType[] = [
    {id: 1, message: 'Hi', icon: msgIcon},
    {id: 2, message: 'How are you', icon: msgIcon},
    {id: 3, message: 'Yo', icon: msgIcon},
]
const PostsData: PostType[] = [
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
    }]

export type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type AddNewMessageTextActionType = {
    type: 'ADD-NEW-MESSAGE-TEXT',
    newMessageText: string
}

export type AddNewMessageActionType = {
    type: 'ADD-NEW-MESSAGE',
    newMessage: string
}

export type ActionsType =
    AddPostActionType
    | ChangeNewTextActionType
    | AddNewMessageTextActionType
    | AddNewMessageActionType

export interface StoreType {
    _state: StateType,
    _callSubscriber: () => void

    // addPost: () => void
    // onChangePost: (newPostText: string) => void
    dispatch: (action: ActionsType) => void

    subscribe: (observer: () => void) => void
    getState: () => StateType

}

// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
// const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
// const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export const store: StoreType = {
    _state: {
        ProfilePage: {
            posts: [...PostsData],
            newPostText: ''
        },
        DialogsPage: {
            contacts: [...ContactList],
            messages: [...MessagesList],
            newMessageText: ''
        }
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer
        console.log('state changed')
    },
    getState() {
        return this._state
    },

    // addPost() {

    // const newPost: PostType = {
    //     id: Math.random()*10,
    //     message: this._state.ProfilePage.newPostText,
    //     image: msgIcon,
    //     likesCount: Math.ceil(Math.random()*10),
    //     time: '0:00',
    //     sender: 'Artem'
    // }
    // this._state.ProfilePage.posts.unshift(newPost)
    // this._state.ProfilePage.newPostText = ''
    // this._callSubscriber()
    // },
    // onChangePost (newPostText: string ) {
    // this._state.ProfilePage.newPostText = newPostText
    // this._callSubscriber()
    // },
    dispatch(action: ActionsType) { // { type: 'ADD-POST' }
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action)
        this._callSubscriber()
        // switch (action.type) {
            // case ADD_POST:
            //     const newPost: PostType = {
            //         id: Math.random() * 10,
            //         message: action.postText,
            //         image: msgIcon,
            //         likesCount: Math.ceil(Math.random() * 10),
            //         time: '0:00',
            //         sender: 'Artem'
            //     }
            //     this._state.ProfilePage.posts.unshift(newPost)
            //     this._state.ProfilePage.newPostText = ''
            //     this._callSubscriber()
            //     break;
            // case UPDATE_NEW_POST_TEXT:
            //     this._state.ProfilePage.newPostText = action.newText
            //     this._callSubscriber()
            //     break;
            // case ADD_NEW_MESSAGE_TEXT:
            //     this._state.DialogsPage.newMessageText = action.newMessageText
            //     this._callSubscriber()
            //     break;
            // case ADD_NEW_MESSAGE:
            //     let newMessage = this._state.DialogsPage.newMessageText
            //     this._state.DialogsPage.newMessageText = ''
            //     this._state.DialogsPage.messages.push({id: Math.random() * 10, message: newMessage, icon: msgIcon})
            //     this._callSubscriber()
        // }

    },
}

// export const UpdateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
//
// export const AddPostActionCreator = (post: string) => ({type: ADD_POST, postText: post})

// export const AddMessageActionCreator = (message: string) => ({type: ADD_NEW_MESSAGE, newMessage: message})
//
// export const UpdateMessageTextActionCreator = (newMessageText: string) => ({
//     type: ADD_NEW_MESSAGE_TEXT,
//     newMessageText: newMessageText
// })



