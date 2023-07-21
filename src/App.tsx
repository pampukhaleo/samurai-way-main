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
  website: 'https://github.com/pampukhaleo',
  profilePicture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80'
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
