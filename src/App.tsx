import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";

const App = () => {
    return (
        <div className="App">
            <div className={'Container'}>
                <Header/>
                <div className={'Content'}>
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        </div>
    );
}

export default App;
