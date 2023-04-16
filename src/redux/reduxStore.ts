import {combineReducers, createStore} from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";



  const reducers = combineReducers ({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
})

const reduxStore: any = createStore(reducers)



export default reduxStore