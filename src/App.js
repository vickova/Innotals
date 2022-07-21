import React from 'react';
// import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <About /> */}
      <SignIn/>
      <SignUp/>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
