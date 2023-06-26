import React from 'react';
import './App.css';
import Header from "./componens/Header/Header";
import Technologies from "./componens/Technologies/Technologies";

const headerButtonsList = ['Home', 'News Feed', 'Messages']
const technologiesArray = ['css', 'html', 'js', 'react']

function App() {
  return (
    <div className="App">
      <Header buttonsList={headerButtonsList}/>
      <Technologies technologiesList={technologiesArray}/>
    </div>
  );
}

export default App;
