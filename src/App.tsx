import React from 'react';
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
import { DialogDataType, HeaderButtonListType, MessageDataType, ProfileDataType } from './index';

type PropsType = {
  headerButtonsList: HeaderButtonListType[]
  profileData: ProfileDataType
  dialogData: DialogDataType[]
  messageData: MessageDataType[]
}

function App(props: PropsType) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="main">
          <Sidebar buttonsList={ props.headerButtonsList }/>
          {/*<Profile profileData={profileData}/>*/ }
          <div className="content">
            <Route path="/profile" render={ () => <Profile profileData={ props.profileData }/> }/>
            <Route path="/messages/"
                   render={ () => <Messages dialogData={ props.dialogData }
                                            messageData={ props.messageData }/> }/>
            <Route path="/news" render={ () => <News/> }/>
            <Route path="/music" render={ () => <Music/> }/>
            <Route path="/settings" render={ () => <Settings/> }/>
          </div>
        </main>
        <Footer buttonsList={ props.headerButtonsList }/>
      </div>
    </BrowserRouter>

  );
}

export default App;
