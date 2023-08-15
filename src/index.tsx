import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, state } from './redux/state';

export const Render = () => {
  ReactDOM.render(
    <App state={ state } addPost={ addPost }/>,
    document.getElementById('root')
  );
  console.log('rendered')
}

Render()

