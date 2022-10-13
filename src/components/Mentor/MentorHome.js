import React from 'react';
import styled from 'styled-components';
import Circles from './Circles';
import James from '../../assets/images/james.png';
import Braman from '../../assets/images/braman.png';
import BluePlus from '../../assets/icons/blue-plus.svg';
import Calender from '../../assets/icons/CalendarBlank.svg';
import Session from './Session';
import Request from './Request';


const MentorHome = () => {
  return (
    <MentorHomeStyle>
        <div className='head-circ'>
            <h3>Scheduled Sessions</h3>
            <div className='calendar'>
                <Circles text='2'/>
                <img src={Calender} alt="calender" className='cal'/>
            </div>
        </div>
        <div className='flex'>
            <Session type='Virtual' picture={James} date='22/04/2022' job='Product designer' 
            name='Daniel james' button='Start session' btncol=' #0B5A09'/>
            <Session type='Virtual' picture={James} date='23/04/2022' job='Jnr Product designer' 
            name='Isreal Banton' button='View bio' btncol='#0950CD'/>
        </div>
        <div className='head-circ'>
            <h3>Session Request</h3>
            <Circles text='2'/>
        </div>
        <div className='flex'>
            <Request type='Virtual' picture={Braman} date='22/04/2022' job='Product designer' 
            name='Daniel james' button='Schedule'/>
            <Request type='Virtual' picture={Braman} date='22/04/2022' job='Product designer' 
            name='Daniel james' button='Schedule'/>
        </div>
        <div className='head-circ'>
            <h3>Scheduled Sessions</h3>
            <Circles text='1'/>
        </div>
        <div className='flex'>
            <Session type='Virtual' picture={James} date='22/04/2022' job='Jnr Product designer' 
            name='Isreal Banton' button='View bio' btncol='#0950CD'/>
            <Session type='Virtual' picture={James} date='23/04/2022' job='Jnr Product designer' 
            name='Isreal Banton' button='View bio' btncol='#0950CD'/>
        </div>
        <h3>Assesment Test</h3>
        <div className='box'></div>
        <div className='flex-circ'>
            <img src={BluePlus} alt="plus" className='plus' />
            <p className='ment'>Add  Mentees</p>
            <div className="rounded">
            <Circles text='2'/>
            </div>
        </div>
        <div className="button">
            <button>Send Assessment</button>
        </div>
    </MentorHomeStyle>
  )
}
const MentorHomeStyle = styled.div`
width:100%;
margin: 2rem 3rem;
.flex{
    display:flex;
    justify-content:space-between;
}
    h3{
        font-size:2rem;
        color:#121212;
    }
    .head-circ{
        display:flex;
        justify-content:space-between;
        .calendar{
            display:flex;
            gap:1rem;
            .cal{
                display:none;
            }
        }
    }
    .flex-circ{
        display:flex;
        gap:1rem;
        align-items:center;
        .ment{
            color:#0950CD;
        }
        .plus{
            display:none;
        }
    }
    .button{
        button{
        background: #0950CD;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            border:none;
            color:#FFF;
            padding: 1rem 2.5rem;
            font-size:1.5rem;
            cursor:pointer;
        }
    }
    .box{
        height:145px;
        width: 45%;
        border-radius:40PX;
        margin:2rem 0;
    }
    @media screen and (min-width: 1200px){
        
    }
@media screen and (max-width: 680px){
    margin:1rem 1rem;
    h3{
        font-size:1.5rem;
    }
    .flex{
        display:block;
    }
    .flex-circ{
        .plus{
            display:block;
        }
        .rounded{
            display:none;
        }
    }
    .head-circ{
        display:block;
        .calendar{
            .cal{
                display:block;
            }
        }
    }
    .button{
        button{
            font-size:1rem;
            pad:1rem;
        }
    }
    .box{
        border:1px solid #0950CD;
        width: 100%;
    }
}
`
export default MentorHome