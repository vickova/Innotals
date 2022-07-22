import React from 'react';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import Footer from './components/Footer';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default App;
