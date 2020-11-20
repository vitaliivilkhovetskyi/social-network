import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";




const App = (props) => {
  return (
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  {/*<Route path='/dialogs' component={Dialogs} />*/}
                  {/*<Route path='/profile' component={Profile} />*/}
                  {/*<Route path='/news' component={News} />*/}
                  {/*<Route path='/music' component={Music} />*/}
                  {/*<Route path='/settings' component={Settings} />*/}

                  <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> } />
                  <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
                  <Route path='/news' render={ () => <News/> } />
                  <Route path='/music' render={ () => <Music/> } />
                  <Route path='/settings' render={ () => <Settings/> } />
                  <Route path='/andrey' render={ () => <Friends state={props.state.sitebar} /> } />
                  <Route path='/sasha' render={ () => <Friends state={props.state.sitebar} /> } />
                  <Route path='/vasya' render={ () => <Friends state={props.state.sitebar} /> } />
              </div>
          </div>
          )
}


export default App;
