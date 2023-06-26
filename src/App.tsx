import React from 'react';
import './App.css';
import Header from "./componens/Header/Header";
import Technologies from "./componens/Technologies/Technologies";
import Footer from "./componens/Footer/Footer";
import Sidebar from "./componens/Sidebar/Sidebar";

const headerButtonsList = ['Profile', 'Messages', 'News', 'Music', 'Settings']
const technologiesArray = ['css', 'html', 'js', 'react']

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Sidebar buttonsList={headerButtonsList}/>
        <Technologies technologiesList={technologiesArray}/>
      </main>
      <Footer buttonsList={headerButtonsList}/>
    </div>
  );
}

export default App;
