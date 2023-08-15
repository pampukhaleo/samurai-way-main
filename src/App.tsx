import React, { useState } from 'react';
import './App.css';
import Header from './componens/Header/Header';
import Profile from './componens/Profile/Profile';
import Footer from './componens/Footer/Footer';
import Sidebar from './componens/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './componens/News/News';
import { Messages } from './componens/Messages/Messages';
import { Music } from './componens/Music/Music';
import { Settings } from './componens/Settings/Settings';
import { addPost, DialogDataType, HeaderButtonListType, MessageDataType, ProfileDataType } from './redux/state';

type StateType = {
  headerButtonsList: HeaderButtonListType[]
  profileData: ProfileDataType
  dialogData: DialogDataType[]
  messageData: MessageDataType[]
}

type PropsType = {
  state: StateType
  addPost: (text: string) => void
}

function App(props: PropsType) {
  const {state, addPost} = props
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="main">
          <Sidebar buttonsList={ state.headerButtonsList }/>
          <div className="content">
            <Route path="/profile"
                   render={ () => <Profile addPost={ addPost } profileData={ state.profileData }/> }/>
            <Route path="/messages/"
                   render={ () => <Messages dialogData={ state.dialogData }
                                            messageData={ state.messageData }/> }/>
            <Route path="/news" render={ () => <News/> }/>
            <Route path="/music" render={ () => <Music/> }/>
            <Route path="/settings" render={ () => <Settings/> }/>
          </div>
        </main>
        <Footer buttonsList={ state.headerButtonsList }/>
      </div>
    </BrowserRouter>

  );
}

export default App;
