import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./Pages/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="App">
            <div className={'Container'}>
                <Header/>
                <div className={'Content'}>
                    <Sidebar/>
                    <Content/>
                    {/*<Dialogs/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
