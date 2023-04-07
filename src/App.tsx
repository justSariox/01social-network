import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import { Dialogs } from "./Pages/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import { StateType} from "./redux/state";



type AppPropsType = {
    state: StateType
}


const App: React.FC<AppPropsType> = ({state}) => {

    return (

                <div className="App">

                    <div className={'Container'}>
                        <Header/>
                        <div className={'Content'}>
                            <Sidebar/>
                            <>
                                <Route path={'/profile'} render={() => <Content ProfilePageState={state.ProfilePage}/>}/>
                                <Route path={'/dialogs/'} render={() => <Dialogs DialogsPageState={state.DialogsPage}/>}/>
                            </>
                        </div>
                    </div>
                </div>
    );
}

export default App;
