import './styles/base.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import ContextProvider from './ContextProvider';
import store from './store';

let root = (
    <ContextProvider context={{store}}>
        <Main />
    </ContextProvider>
);

ReactDOM.render(
    root,
    document.querySelector('.app-content')
);