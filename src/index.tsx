import React from 'react';
import './index.css';


import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reduxStore from "./redux/reduxStore";
import {StateType} from "./redux/state";

let rerenderEntireTree = (state: StateType) => {
    console.log()
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={reduxStore.dispatch.bind(reduxStore)}
                />
        </BrowserRouter>,

        document.getElementById('root')
    );
}

rerenderEntireTree(reduxStore.getState())

reduxStore.subscribe(() => {
    let state = reduxStore.getState()
    rerenderEntireTree(state)
}
)