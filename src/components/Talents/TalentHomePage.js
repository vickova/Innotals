import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/icons/arrow.svg';
import Location from '../../assets/icons/location.svg';
import Amount from '../../assets/icons/case.svg';

const TalentHomePage = () => {
  return (
    <AsideBody>
      <div className='body-inner'>
          <h2>Hello<span>, John Felix</span></h2>
          <div className='completeProfile'>
            <div className='complete-inner'>
              <div className='complete'>
                <h3>Complete your profile now</h3>
                <p>60% complete</p>
              </div>
              <div className='gray-line'>
                <div className='blue-line'></div>
              </div>
            </div>
            <div className='complete-image'>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className='circle-flex'>
            <div className='circles-performance'>
              <div className='performance-cover'>
                <div className='perform'>
                  <div className='bullet'></div>
                  <h3>Performance</h3>
                </div>
                <div className='all-circles'>
                  <div className='big-circle-cover'>
                    <div id='test'>
                      <div>
                      <h3>Test</h3>
                      <p>40%</p>
                      </div>
                    </div>
                    <div className='circle'>

                    </div>
                    <div id='interview'>
                      <h3>Interview</h3>
                      <p>20%</p>
                    </div>
                  </div>
                  <div className='small-circle-cover'>
                    <div className='inner-circled'>
                    <div className='circle-cover'>
                      <h3>Test</h3>
                      <div id='tested'  className='small-circle'></div>
                      <p>40%</p>
                    </div>
                    <div className='circle-cover'>
                      <h3>Interview</h3>
                      <div id='interviewed' className='small-circle'></div>
                      <p>20%</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='jobs'>
              <div className='job-cards'>
                <div className='jobs-heading'>
                  <div className='jobs-bullet'>
                    <div className='bullet'>

                    </div>
                    <h3>Jobs</h3>
                  </div>
                  <p><Link to='/talenthome/talenthomepage/jobs'>View all</Link></p>
                </div>
                <h3 className='sub-head'>Junior software developer</h3>
                <div>
                  <h3 className='sub-head'>JALINGO GROUP</h3>
                  <div className='jalingo'>
                    <div>
                      <div className='pegs'>
                        <img src={Location} alt="location" />
                        <p>Remote</p>
                      </div>
                      <div className='pegs'>
                        <img style={{width:'20px', height:'20px'}} src={Amount} alt="amount" />
                        <p>200k - 500k</p>
                      </div>
                    </div>
                    <button className='view'>View</button>
                  </div>
                </div>
              </div>
              <div className='job-cards'>
                <div className='jobs-heading'>
                  <div className='jobs-bullet'>
                    <div className='bullet'>

                    </div>
                    <h3>Events</h3>
                  </div>
                  <p>View all</p>
                </div>
                <div>
                  <div className='feature'>
                    <div className='meeting'>
                      <div className='tiny'></div>
                      <p>Career building onference...</p>
                    </div>
                    <div className='square-pic'>
                      <div className='square-flex'>
                        <img src={Location} alt="location" />
                        <p>Zoom</p>
                      </div>
                      <div className='square-flex amount'>
                        <img src={Amount} alt="date" />
                        <p>Feb 24</p>
                      </div>
                    </div>
                  </div>
                  <div className='feature'>
                    <div className='meeting'>
                      <div className='tiny'></div>
                      <p>Dev community meeting</p>
                    </div>
                    <div className='square-pic'>
                      <div className='square-flex'>
                        <img src={Location} alt="location" />
                        <p>Zoom</p>
                      </div>
                      <div className='square-flex amount'>
                        <img src={Amount} alt="date" />
                        <p>Feb 24</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AsideBody>
  )
}

const AsideBody = styled.div`
  margin: 1rem 3rem;
  width:100%;
  .body-inner{
  }
  #last-para{
    color: #008000;
    text-align:right;
    margin: 1rem;
  }
  .sub-head{
    color: #717171;
  }
  h2{
    font-size:3rem;
    color:#2976FC;
    margin:1rem;
    span{
      color: #414141;
    }
  }
  p{
    font-size:1.2rem;
    color: #717171;
    a{
        color:#717171;
        text-decoration:none;
    }
  }
  button{
    cursor:pointer;
  }
  .view{
    background-color:#0950CD;
    border:none;
    padding: .5rem;
    color:#FFF;
  }
  .completeProfile{
    display:flex;
    border:1px solid #0950CD;
    border-radius: 10px;
    padding:.5rem 2rem;
    margin:1rem;
    .gray-line{
      background-color: #568AE53B;
      height: 10px;
      width:100%;
      border-radius: 30px;
    }
    .blue-line{
      background-color:#0950CD;
      height:100%;
      width:80%;
      border-radius:30px;
    }
    .complete{
    display:flex;
    justify-content:space-between;
    h3{
      color: #3d3b3b;
      font-size:2.5rem;
    }
    p{
      color:gray;
      font-size:1.5rem;
    }
  }
  .complete-inner{
    width:80%;
  }
  .complete-image{
    width:15%;
    display:flex;
    align-items:flex-end;
    img{
      width: 40px;
      height: 40px;
      background-color:#FFF;
      box-shadow: 1px 1px #2976FC;
      padding:.5rem;
      border-radius: 50%;
    }
  }
  }
  .circle-flex{
    display:flex;
    justify-content:space-between;
    .jobs{
      width:40%;
      .job-cards{
        border:1px solid #0950CD;
        border-radius:10px;
        padding:2rem;
        margin:1rem;
        h3{
          font-size:1.2rem;
          margin: .5rem 0;
        }
        .jalingo{
        display:flex;
        align-items:center;
        justify-content:space-between;
      }
      .feature{
        .tiny{
          width:20px;
          height:20px;
          background-color:#0950CD;
          border-radius:50%;
        }
        .meeting{
          display:flex;
          gap:1rem;
          margin:.5rem 0;
          p{
            margin:0;
          }
        }
        .square-pic{
          display:flex;
          gap: 3rem;
          height:2rem;
          align-items:center;
          .square-flex{
            display:flex;
            gap:2rem;
            p{
              margin:0;
            }
            img{
              width:20px;
              height:20px;
            }
          }
          .amount{
            img{
              width: 20px;
              height:20px;
            }
          }
        }
      }
      }
      .jobs-heading{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:2rem;
        h3{
          margin:1rem 0;
        }
        .jobs-bullet{
        display:flex;
        gap:2rem;
        h3{
          margin:0;
        }
      }
      
      }
      .pegs{
        display:flex;
        align-items:flex-end;
        gap:1rem;
        margin: .5rem 0;
        p{
          margin:0;
        }
      }
    }
  }
  .bullet{
          height: 30px;
          width: 10px;
          background-color:#0950CD;
          border-radius:10px;
        }
  .circles-performance{
    border:1px solid #0950CD;
    padding:2rem;
    border-radius:10px;
    margin: 1rem;
    gap:1rem;
    width:50%;
    .circle{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border-top: 50px solid #0950CD;
      border-left: 50px solid #0950CD;
      border-right: 50px solid #FF6600;
      border-bottom: 50px solid #FF6600;
      transform:rotate(-45deg);
    }
    .performance-cover{
      .perform{
        display:flex;
        gap:2rem;
        margin: 2rem 0;
        h3{
          color: #3d3b3b;
          font-size:2rem;
          margin:0;
        }
      }
      .all-circles{
        display:flex;
        gap:2rem;
      }
      .big-circle-cover{
        position: relative;
        h3{
          font-size: 1.5rem;
        }
        #test, #interview{
          position:absolute;
          text-align:center;
        }
        #test{
          bottom:-20px;
        }
        #interview{
          top:-50px;
          right:-50px;
        }
      }
      .small-circle-cover{
        display:flex;
        justify-content:center;
        width: 50%;
        height:100%;
        /* .inner-circled{
          width:100%;
        } */
        .inner-circled{
          height:80%;
        }
        .circle-cover{
          text-align:center;
          h3{
            font-size:1.5rem;
            margin: .5rem 0;
          }
          p{
            margin:0;
          }
          .small-circle{
            width:45px;
            height:45px;
            border-radius:50%;
            border: 20px solid #FFF;
          }
          #tested{
          border-top: 20px solid #2976FC;
          border-left: 20px solid #2976FC;
          border-right: 20px solid #CFCFCF;
        }
        #interviewed{
          border-top: 20px solid #CFCFCF;
          border-right: 20px solid #CFCFCF;
          border-left: 20px solid #FF6600;
        }
        }
      }
    }
  }
  @media screen and (max-width: 680px){
      margin:0;
      h2{
        font-size:2rem;
      }
      h3{
          font-size:1.2rem;
      }
      p{
          font-size:1rem;
      }
    .circles-performance{
      .performance-cover{
        .big-circle-cover{
        position: relative;
        #test{
          bottom:30px;
        }
        #interview{
          top:-30px;
          right:-50px;
        }
      }
        .perform{
          margin-top:0;
        }
        .big-circle-cover, .small-circle-cover{
          .circle-cover{
            h3{
              font-size: 1rem;
            }
          }
          h3{
            font-size:1rem;
          }
        }
      }
      .circle{
        width:100px;
        height:100px;
        border-top: 30px solid #0950CD;
        border-left: 30px solid #0950CD;
        border-right: 30px solid #FF6600;
        border-bottom: 30px solid #FF6600;
      }
    }
    .circle-flex{
      display:block;
      .jobs{
        width:100%;
      }
    }
    .small-circle{
        width:30px;
        height:30px;
    }
    .completeProfile{
      .complete{
        h3{
          font-size:1.2rem;
        }
      }
    }
  }
`
export default TalentHomePage