import React from 'react';
import OverviewSection from '../components/overview-section';
import Victor from '../assets/images/Rectangle 201.png';
import Lady from '../assets/images/Rectangle 156.jpg'
import Questions from '../components/Questions';
import Subscription from '../components/Subscription';
import Mission from '../components/Mission';
import { OverviewStyle } from '../style';
import styled from 'styled-components';


const About = () => {
  return (
    <AboutStyle>
        <OverviewSection/>
        <OverviewStyle>
            <div className='head'>
                <h2>Innotals Team</h2>
                <div></div>
            </div>
            <div className='overview-text' style={{padding: '2rem 1.5rem', color:'#FBFBFB', backgroundColor:'rgba(18, 18, 18, 0.75)'}}>
                <div className='box-images'><img src={Victor} alt="victor olatunde" /></div>
                <div className='texts'>
                    <div>
                        <div>
                            <h2 className='white-text'>Victor Olatunde</h2>
                            <h3>Founder/CEO</h3>
                        </div>
                        <div><p className='white-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero eligendi unde fugiat et. Veniam ratione accusamus totam eum debitis!</p></div>
                    </div>
                </div>
            </div>
        </OverviewStyle>
        <OverviewStylelady>
            <div className='lady-head'>
                <div className='head'>
                    <h2>Our Vision</h2>
                    <div className='line'><div></div></div>
                </div>
            </div>
            <div className='overview-text'>
                <div className='box-images'><img src={Lady} alt="victor olatunde" /></div>
                <div className='texts'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non, velit vel odit consequatur unde ad pariatur quisquam possimus ut praesentium nemo, molestias voluptatum magnam provident in itaque iste et adipisci natus? Temporibus earum voluptatibus similique sint minima modi commodi?</p></div>
            </div>
        </OverviewStylelady>
        <Mission/>
        <Questions/>
        <Subscription/>
    </AboutStyle>
  )
}
const AboutStyle = styled.div`
    margin: auto 120px;
    p{
        color: rgba(18, 18, 18, 0.6);
        font-family: 'Ubuntu', sans-serif;
    }
    h2{
        color: #121212;
        font-size: 2rem;
        font-family: 'Inter', sans-serif;
    }
    .white-text{
        color:#FBFBFB;
    }
    @media (max-width: 768px){
        margin: auto 20px;
    }
`;


const OverviewStylelady = styled(OverviewStyle)`
    .lady-head{
        display: flex;
        justify-content: center;
    }
    .head{
        text-align: center;
        .line{
            background-color: inherit;
            width: 100%;
            display: flex;
            justify-content:center;
        }
    }
`;
export default About;