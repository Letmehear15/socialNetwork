import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './style/App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Message/DialogsContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initialization} from './redux/reducers/initializationReducer'
import Loader from './components/Loader/Loader';
import { compose } from 'redux';
import { withSuspense } from './hoc/withSuspense';

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));

class App extends Component {

  componentDidMount() {
    this.props.initialization();
  }

  render() {
    if(!this.props.isInit) return <Loader/>
    return (
      <Router>
          <div className="App">
            <HeaderContainer />
            <div className="container">
              <Aside/>
              <Route path='/profile/:id' render={()=><ProfileContainer/>}/>
              <Route exact path='/profile' render={()=><ProfileContainer/>}/>
              <Route path='/message' render={()=><Dialogs/>}/>
              <Route path='/users' render={()=><UsersContainer/>}/>

              <Route path='/news' render={ withSuspense(News)}/>
              <Route path='/music' render={withSuspense(Music)}/>
              <Route path='/settings' component={Settings}/>
              <Route path="/login" component={Login}/>
              <Redirect from="/" to="/profile"/>
            </div>
          </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isInit: state.init.isInit
  }
}
export default compose(
  connect(mapStateToProps, {initialization})
)(App);

