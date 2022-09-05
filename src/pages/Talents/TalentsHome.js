import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import TalentAside from '../../components/TalentAside';
import TalentHomePage from '../../components/TalentHomePage';
import TalentCommunity from '../../components/TalentCommunity';
import TalentCourses from '../../components/TalentCourses';
import TalentInterview from '../../components/TalentInterview';
import TalentSettings from '../../components/TalentSettings';
import TalentMentor from '../../components/TalentMentor';
import TalentHomeJobs from '../../components/TalentHomeJobs';
import TalentResume from '../../components/TalentResume';
import Nav from '../../components/Nav';



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
        <Route path='/settings' element={<TalentSettings/>}/>
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