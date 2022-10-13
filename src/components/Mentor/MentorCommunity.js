import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TalentCommunity from '../Talents/TalentCommunity';
import IsraelCommunity from './Israel';

const MentorCommunity = () => {
  return (
    <Routes>
      <Route path='/*' element={<TalentCommunity/>}/>
      <Route path='/israel' element={<IsraelCommunity name='Isreal Banton'/>}/>
      <Route path='/victor' element={<IsraelCommunity name='Victor Braman'/>}/>
    </Routes>
  )
}

export default MentorCommunity