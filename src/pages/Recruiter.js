import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import RecruiterHome from '../components/Recruiter/RecruiterHome';
import RecruiterInterview from '../components/Recruiter/RecruiterInterview';
import RecruiterSettings from '../components/Recruiter/RecruiterSettings';
import RecruiterAside from '../components/Recruiter/RecruiterAside';

const Recruiter = () => {
  return (
    <RecruiterStyle>
        <Nav/>
        <HomeStyle>
            <RecruiterAside/>
            <Routes>
                <Route path='/' element={<RecruiterHome/>}/>
                <Route path='/interview' element={<RecruiterInterview/>}/>
                <Route path='/settings/*' element={<RecruiterSettings/>}/>
            </Routes>
        </HomeStyle>
    </RecruiterStyle>
  )
}

const RecruiterStyle = styled.div`

`
const HomeStyle = styled.div`
  display:flex;
  p, h3{
        /* color: rgba(18, 18, 18, 0.6); */
        font-family: 'Ubuntu', sans-serif;
    }
    h2{
        color: #121212;
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
    }
`;
export default Recruiter