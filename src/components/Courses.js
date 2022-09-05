import React from 'react';
import styled from 'styled-components';

const Courses = ({text}) => {
  return (
    <CoursesStyle>
        <div className='gray-circle'></div>
        <h3>{text}</h3>
    </CoursesStyle>
  )
}

const CoursesStyle = styled.div`
    width: 100%;
    border:1px solid #0950CD;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 2rem 0;
    margin:.5rem;
    .gray-circle{
        width:150px;
        height:150px;
        border-radius:50%;
        background-color: #d0dfe6;
    }
    h3{
        text-align:center;
    }
`
export default Courses