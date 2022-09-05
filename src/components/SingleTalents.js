import React from 'react';
import styled from 'styled-components';

const SingleTalents = ({talents}) => {
  return (
    <SingleTalentsStyle>
        <img src={talents.icon} alt={`${talents.name}`} />
        <p>{`${talents.name}`}</p>
    </SingleTalentsStyle>
  )
}

const SingleTalentsStyle = styled.div`

`
export default SingleTalents