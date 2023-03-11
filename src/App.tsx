import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./Pages/Dialogs/Dialogs";
import { Route} from "react-router-dom";


const App: React.FC = () => {
    return (
                <div className="App">
                    <div className={'Container'}>
                        <Header/>
                        <div className={'Content'}>
                            <Sidebar/>
                            <>
                                <Route path={'/profile'} render={() => <Content/>}/>
                                <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                            </>
                        </div>
                    </div>
                </div>
    );
}

export default App;
