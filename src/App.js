import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path={'/music'} element={<Music />} />
                        <Route path={'/news'} element={<News /> } />
                        <Route path={'/settings'} element={<Settings />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;