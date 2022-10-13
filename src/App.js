import React from 'react';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recruiter from './pages/Recruiter';
import TalentsHome from './pages/TalentsHome';
import Mentor from './pages/Mentor';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/talenthome/*' element={<TalentsHome/>}/>
          <Route path='/recruiter/*' element={<Recruiter/>}/>
          <Route path='/mentor/*' element={<Mentor/>}/>
        </Routes>
    </div>
  )
}

export default App;
