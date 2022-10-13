import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import MentorAside from '../components/Mentor/MentorAside';
import MentorHome from '../components/Mentor/MentorHome';
import MentorSettings from '../components/Mentor/MentorSettings';
import MentorCommunity from '../components/Mentor/MentorCommunity';


const Mentor = () => {
  return (
    <MentorStyle>
        <Nav/>
        <HomeStyle>
            <MentorAside/>
            <Routes>
                <Route path='/' element={<MentorHome/>}/>
                <Route path='/community/*' element={<MentorCommunity/>}/>
                <Route path='/settings/*' element={<MentorSettings/>}/>
            </Routes>
        </HomeStyle>
    </MentorStyle>
  )
}

const MentorStyle = styled.div`

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
export default Mentor