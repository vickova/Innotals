import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import TalentAside from '../components/Talents/TalentAside';
import TalentHomePage from '../components/Talents/TalentHomePage';
import TalentCommunity from '../components/Talents/TalentCommunity';
import TalentCourses from '../components/Talents/TalentCourses';
import TalentInterview from '../components/Talents/TalentInterview';
import TalentSettings from '../components/Talents/TalentSettings';
import TalentMentor from '../components/Talents/TalentMentor';
import TalentHomeJobs from '../components/Talents/TalentHomeJobs';
import TalentResume from '../components/Talents/TalentResume';
import Nav from '../components/Nav';
import Recruiter from './Recruiter';



const TalentsHome = () => {

  return (
    <AllHome>
      <Nav/>
    <HomeStyle>
      <TalentAside/>
      <Routes>
        <Route path='/' element={<TalentHomePage/>}/>
        <Route path='/talenthomepage/jobs' element={<TalentHomeJobs/>}/>
        <Route path='/mentor/*' element={<TalentMentor/>}/>
        <Route path='/courses' element={<TalentCourses/>}/>
        <Route path='/resume' element={<TalentResume/>}/>
        <Route path='/interview' element={<TalentInterview/>}/>
        <Route path='/community' element={<TalentCommunity/>}/>
        <Route path='/settings/*' element={<TalentSettings/>}/>
      </Routes>
    </HomeStyle>
    </AllHome>
  )
};
const AllHome = styled.div`
  
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
export default TalentsHome;