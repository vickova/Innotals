import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Filter from '../../assets/icons/filter.svg';
import Search from '../../assets/images/search.png';
import Jenny from '../../assets/images/jenny.png';
import Mark from '../../assets/images/mark.png';
import Eben from '../../assets/images/eben.png';
import RedGuy from '../../assets/images/redguy.png';
import WhiteGuy from '../../assets/images/whiteguy.png';
import WhiteLady from '../../assets/images/whitelady.png';
import Chinese from '../../assets/images/chinese.png';

const TalentMentorHome = () => {
  return (
    <TalentMentorStyle Jenny={Jenny} Mark={Mark} Eben={Eben}>
        <div className='mentor-tasks'>
            <div className='mentor-task-inner'>
                <h2><Link to='/talenthome/mentor/'>Mentor</Link></h2>
                <h2 className='tasked'><Link to='/talenthome/mentor/task'><span>Task</span> <span id='d3'>3</span></Link></h2>
            </div>
            <div className='mentor-task-line'><div id='line'></div></div>
        </div>
        <div className='search-flex'>
            <div className='search-sect'>
                <div className='search-input'>
                    <img src={Search} alt="search-icon" />
                    <input type="text" placeholder='Search for mentors'/>
                </div>
                <button><span>Fliter</span> <img src={Filter} alt="fliter-icon" /></button>
            </div>
            <div>
                <div>
                    <img src={RedGuy} alt="small-circles" />
                    <img className='left' src={WhiteLady} alt="small-circles" />
                    <img className='left' src={WhiteGuy} alt="small-circles" />
                    <img className='left' src={Chinese} alt="small-circles" />
                </div>
                <p>Booked members</p>
            </div>
        </div>
        <div className='mentors-card-cover'>
            <div className='mentors-card jenny'>
                <div className='mentors-bg'>
                    <div>
                        <img className='img-full' src={Jenny} alt="jenny" />
                        <div className='mentor-text'>
                            <h3>Jenny Davis</h3>
                            <p>Srn, Product Designer</p>
                        </div>
                    </div>
                </div>
                <div className='mentor-bio'>
                    <p>Jenny is a product designer with over 15years of experience with expertise in varieties of design tools</p>
                    <p className='red'>Read more...</p>
                    <button>Schedule</button>
                </div>
            </div>
            <div className='mentors-card jenny'>
                <div className='mentors-bg'>
                    <div>
                        <img className='img-full' src={Mark} alt="mark" />
                        <div className='mentor-text'>
                            <h3>John Mark</h3>
                            <p>Lead Developer at Microsoft</p>
                        </div>
                    </div>
                </div>
                <div className='mentor-bio'>
                    <p>with over 20years of experience in software development, has vast knowledge and risen in rank anf file at microsoft</p>
                    <p className='red'>Read more...</p>
                    <button>Schedule</button>
                </div>
            </div>
            <div className='mentors-card eben'>
                <div className='mentors-bg'>
                    <div>
                        <img src={Eben} alt="eben" />
                        <div className='mentor-text'>
                            <h3>Ebenezer</h3>
                            <p>UX designer</p>
                        </div>
                    </div>
                </div>
                <div className='mentor-bio'>
                    <p>A senior UX designer with #service</p>
                    <p className='red'>Read more...</p>
                    <button>Schedule</button>
                </div>
            </div>
        </div>
        <div className='dotting'>
            <div className='dots-pager pager'></div>
            <div className='dots-pager'></div>
            <div className='dots-pager'></div>
            <div className='dots-pager'></div>
        </div>
    </TalentMentorStyle>
  )
}

const TalentMentorStyle = styled.div`
    width:100%;
    button{
        font-size:1rem;
    }
    .mentor-tasks{
        width:20%;
        margin:1rem;
        .mentor-task-inner{
            display:flex;
            justify-content:space-between;
            h2{
                margin:0;
                a{
                    text-decoration:none;
                    color: #121212;
                }
            }
            .tasked{
                position:relative;
                a{
                color: gray;
                }
                #d3{
                    position:absolute;
                    
                    font-size:.8rem;
                    background-color:red;
                    color: #fff;
                    border-radius:50%;
                    padding:.2rem .3rem;
                }
            }
        }
        .mentor-task-line{
            background-color:gray;
            height: 5px;
            width:100%;
            #line{
                width:50%;
                height:100%;
                background-color:#0950CD;
            }
        }
    }
    .search-flex{
        display:flex;
        justify-content:space-between;
        margin:1rem;
        .search-sect{
            display:flex;
            justify-content:space-between;
            margin:1rem 0;
            height:45px;
            width:70%;
            .search-input{
                position:relative;
                width:70%;
                img{
                    position:absolute;
                    top:10px;
                    left:10px;
                }
                input{
                    height: 40px;
                    padding: 0 2rem;
                    width:100%;
                    border-radius:5px;
                }
            }
            button{
                padding: 1rem 1.8rem;
                display:flex;
                gap:1rem;
                background-color:#cbd2dd;
                border:none;
                border-radius:5px;
                img{
                    width:20px;
                    height:20px;
                }
            }
        }
        .left{
            margin-left: -35px;
        }
    }
    .mentors-card-cover{
        display:flex;
        .mentors-card{
            margin:1rem 0 1rem 1rem;
            .mentor-bio{
                margin: 1rem;
            }
            .mentors-bg{
                position:relative;
                img{
                    width:100%;
                }
                .mentor-text{
                    position:absolute;
                    color:#FFF;
                    bottom:0;
                }
                div{
                    margin:1rem;
                }
            }
        }
        
        .eben{
            img{
                height: 450px;
            }
        }
        button{
            background-color:#0950CD;
            padding:1rem 4rem;
            color: #fff;
            border-radius: 5px;
            border:none;
            cursor:pointer;
        }
        .red{
            color:red;
            text-align:right;
            margin:0;
        }
    }
    .dotting{
        display:flex;
        justify-content:center;
        gap:1rem;
        margin:2rem 0;
        .dots-pager{
            height:20px;
            width:20px;
            border-radius:50%;
            border:1px solid #0950CD;
        }
        .pager{
            background-color: #0950CD;
        }
    }
    @media screen and (max-width: 680px){
        .search-flex{
            display:block;
            .search-sect{
                width:100%;
                .search-input{
                    width:60%;
                    input{
                        width: 80%;
                    }
                }
                button{
                    gap:.3rem;
                    font-size:.8rem;
                    padding:1rem .6rem;
                    img{
                        width:15px;
                        height:15px;
                    }
                }
            }
        }
        .mentor-tasks{
            width:50%;
        }
        .mentors-card-cover{
            display:block;
            .jenny{
            }
        }
    }
`
export default TalentMentorHome