import React from 'react';
import styled from 'styled-components';
import Courses from './Courses';

const TalentCourses = () => {
  return (
    <TalentCouserseStyle>
      <div className='course'>
      <Courses text='Beginner'/>
      <Courses text='Junior'/>
      <Courses text='Senior'/>
      <Courses text='Advance'/>
      </div>
    </TalentCouserseStyle>
  )
}

const TalentCouserseStyle = styled.div`
width:70%;
padding: 2rem 1rem;
.course{
  display:grid;
  grid-template-columns:1fr 1fr;
  margin:2.5rem 2rem;
  gap: 2.5rem;
}
@media screen and (max-width: 680px){
  width:100%;
  .course{
    display:block;
  }
}
`
export default TalentCourses