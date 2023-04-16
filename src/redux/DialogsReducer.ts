const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const initialState = {
    contacts: [{id: 1, name: 'Mikhail'},
        {id: 2, name: 'Ksenia'},
        {id: 3, name: 'Andrei'},],
    messages: [{id: 1, message: 'Hi', icon: 'msgIcon'},
        {id: 2, message: 'How are you', icon: 'msgIcon'},
        {id: 3, message: 'Yo', icon: 'msgIcon'},],
    newMessageText: ''
}

const DialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.newMessageText}
        case ADD_NEW_MESSAGE:
            let newMessage = {id: 4, message: state.newMessageText, icon: 'msgIcon'}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        default: return state
    }

}

export const AddMessageActionCreator = (message: string) => ({type: ADD_NEW_MESSAGE, newMessage: message})

export const UpdateMessageTextActionCreator = (newMessageText: string) => ({
    type: ADD_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
})
export default DialogsReducer
