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
import { StoreType } from './redux/state';

type PropsType = {
  store: StoreType
}

function App(props: PropsType) {
  const { store } = props
  const state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <main className="main">
          <Sidebar buttonsList={ state.headerButtonsList }/>
          <div className="content">
            <Route path="/profile"
                   render={ () => <Profile dispatch={ store.dispatch.bind(store) }
                                           profileData={ state.profileData }/> }/>
            <Route path="/messages/"
                   render={ () => <Messages dispatch={ store.dispatch.bind(store) }
                                            dialogData={ state.dialogData }/> }/>
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
