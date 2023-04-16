import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./Pages/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsType, StateType} from "./redux/state";



type AppPropsType = {
    state: StateType
    // addPost: () => void
    dispatch: (action: ActionsType) => void

}


const App: React.FC<AppPropsType> = (props) => {

    console.log(props.state)
    console.log(props.state.dialogsPage)
    console.log(props.state.profilePage)
    return (

        <div className="App">
            <div className={'Container'}>
                <Header/>
                <div className={'Content'}>
                        <Sidebar />
                    <>
                        <Route path={'/profile'} render={() =>
                            <Content
                                ProfilePageState={props.state.profilePage}
                                dispatch={props.dispatch}
                            />}
                        />
                        <Route path={'/dialogs/'} render={() =>
                            <Dialogs
                                DialogsPageState={props.state.dialogsPage}
                                dispatch={props.dispatch}
                            />}
                        />
                    </>
                </div>
            </div>
        </div>
    );
}

export default App;
