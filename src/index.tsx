import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, changePostText, state, subscribe } from './redux/state';

export const Render = () => {
  ReactDOM.render(
    <App state={ state } addPost={ addPost } changePostText={ changePostText }/>,
    document.getElementById('root')
  );
  console.log('rendered')
}

Render()

subscribe(Render)

