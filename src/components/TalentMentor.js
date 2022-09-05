import React from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import TalentMentorHome from './TalentMentorHome';
import TalentMentorTask from './TalentMentorTask';

const TalentMentor = () => {
  return (
    <TalentMentorCoverStyle>
        <Routes>
            <Route path='/' element={<TalentMentorHome/>}/>
            <Route path='/task' element={<TalentMentorTask/>}/>
        </Routes>
    </TalentMentorCoverStyle>
  )
}

const TalentMentorCoverStyle = styled.div`
    width:100%;
`
export default TalentMentor;