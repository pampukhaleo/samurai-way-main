import React from 'react';
import './App.css';
import Header from "./componens/Header/Header";
import Profile from "./componens/Profile/Profile";
import Footer from "./componens/Footer/Footer";
import Sidebar from "./componens/Sidebar/Sidebar";

const headerButtonsList = ['Profile', 'Messages', 'News', 'Music', 'Settings']
const profileData = {
  name: 'Leo P.',
  birthday: 32,
  city: 'Kyiv',
  education: 'JS',
  website: 'https://github.com/pampukhaleo'
}

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Sidebar buttonsList={headerButtonsList}/>
        <Profile profileData={profileData}/>
      </main>
      <Footer buttonsList={headerButtonsList}/>
    </div>
  );
}

export default App;
