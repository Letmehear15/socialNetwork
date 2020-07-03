import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './style/App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Main';
import Dialogs from './components/Message/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Aside/>
          <Route path='/profile' exact render={()=><Profile/>}/>
          <Route path='/message' render={()=><Dialogs/>}/>
          <Route path='/users' render={()=><UsersContainer/>}/>
              
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </Router>
  );
}
export default App;
