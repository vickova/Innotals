import React from 'react';
import styled from 'styled-components';

const Button = ({text, Bg}) => {
  return (
    <ButtonStyle style={{backgroundColor: Bg}}>
        {text}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
    padding: 1rem 3rem;
    border-radius: 10px;
    border:none;
    margin: 1rem 0;
`;

export default Button;