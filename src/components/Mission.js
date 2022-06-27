import React from 'react';
import { OverviewStyle } from '../style';
import Art from '../assets/images/Rectangle 157.png'


const Mission = () => {
  return (
    <OverviewStyle>
        <div className='head'>
            <h2>Our Mission</h2>
            <div></div>
        </div>
        <div className='overview-text'>
            <div className='texts'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam reiciendis, temporibus, sapiente quibusdam mollitia debitis autem neque ullam ratione earum eius! Cum consequatur porro atque ratione corporis laborum nostrum ea!</p>
            </div>
            <div className='box-images'><img src={Art} alt='art' /></div>
        </div>
    </OverviewStyle>
  )
}

export default Mission