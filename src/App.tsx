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

const headerButtonsList = [
  { id: 1, name: 'Profile', href: '/profile' },
  { id: 2, name: 'Messages', href: '/messages/' },
  { id: 3, name: 'News', href: '/news' },
  { id: 4, name: 'Music', href: '/music' },
  { id: 5, name: 'Settings', href: '/settings' },
]

const profileData = {
  name: 'Leo P.',
  birthday: 32,
  city: 'Kyiv',
  education: 'JS',
  website: 'https://github.com/pampukhaleo',
  profilePicture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'
}

const dialogData = [
  {
    id: 1,
    profileName: 'Leo',
  },
  {
    id: 2,
    profileName: 'Neo',
  },
]

const messageData = [
  {
    id: 1,
    messages: ['textte xttext text qwqweqwe qwe qwasd asdzxcz asdqwe dazscz qaweqwe dsad eqwe', 'text1', 'text2', 'text3']
  },
  {
    id: 2,
    messages: ['text3', 'text4', 'text5', 'text6']
  },
]

export type MessageDataType = {
  id: number
  messages: Array<string>
}

export type DialogType = {
  id: number
  profileName: string
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="main">
          <Sidebar buttonsList={ headerButtonsList }/>
          {/*<Profile profileData={profileData}/>*/ }
          <div className="content">
            <Route path="/profile" render={ () => <Profile profileData={ profileData }/> }/>
            <Route path="/messages/"
                   render={ () => <Messages dialogData={ dialogData }
                                            messageData={ messageData }/> }/>
            <Route path="/news" render={ () => <News/> }/>
            <Route path="/music" render={ () => <Music/> }/>
            <Route path="/settings" render={ () => <Settings/> }/>
          </div>
        </main>
        <Footer buttonsList={ headerButtonsList }/>
      </div>
    </BrowserRouter>

  );
}

export default App;
