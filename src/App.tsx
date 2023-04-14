import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./Pages/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsType, StateType, store} from "./redux/state";



type AppPropsType = {
    state: StateType
    // addPost: () => void
    dispatch: (action: ActionsType) => void

}


const App: React.FC<AppPropsType> = ({state, dispatch,}) => {
    return (

        <div className="App">

            <div className={'Container'}>
                <Header/>
                <div className={'Content'}>
                        <Sidebar />
                    <>
                        <Route path={'/profile'} render={() =>
                            <Content
                                ProfilePageState={state.ProfilePage}
                                dispatch={dispatch}
                            />}
                        />
                        <Route path={'/dialogs/'} render={() =>
                            <Dialogs
                                DialogsPageState={state.DialogsPage}
                                dispatch={dispatch}
                            />}
                        />
                    </>
                </div>
            </div>
        </div>
    );
}

export default App;
