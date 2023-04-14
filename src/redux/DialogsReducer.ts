const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
const DialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            break;
        case ADD_NEW_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: Math.random() * 10, message: newMessage, icon: ''})
    }
    return state;
}

export const AddMessageActionCreator = (message: string) => ({type: ADD_NEW_MESSAGE, newMessage: message})

export const UpdateMessageTextActionCreator = (newMessageText: string) => ({
    type: ADD_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
})
export default DialogsReducer
