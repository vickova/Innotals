import React from 'react';
import styled from 'styled-components';
import Location from '../../assets/icons/location.svg';
import Amount from '../../assets/icons/case.svg';
import RedGuy from '../../assets/images/redguy.png';
import WhiteGuy from '../../assets/images/whiteguy.png';
import WhiteLady from '../../assets/images/whitelady.png';
import Chinese from '../../assets/images/chinese.png';

const RecruiterHome = () => {
    const jobs = [
        {
            field:'Junior software developer',
            description:'Remote',
            salary:'200k-500k',
            applicant:10,
        },
        {
            field:'Backend devloper',
            description:'Remote',
            salary:'700k-900k',
            applicant:25,
        },
        {
            field:'Lead product designer',
            description:'Remote',
            salary:'700k-900k',
            applicant:5,
        },
        {
            field:'Lead product designer',
            description:'Hybrid',
            salary:'700k-900k',
            applicant:5,
        }
    ]
  return (
    <RecruiterHomeStyle>
        <h2>Post a Job</h2>
        <form>
            <div className='all-form'>
                <div className='first-sect sect'>
                    <div className='select inputs'>
                        <label htmlFor="field">Job Field</label>
                        <select name="field" id="field">
                            <option value="Product design">Product Design</option>
                            <option value="Frontend development">Frontend development</option>
                            <option value="Backend development">Backend development</option>
                            <option value="UI/UX">UI/UX</option>
                        </select>
                    </div>
                    <div className='inputs'>
                        <label htmlFor="description">Job description</label>
                        <input type="text" />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="salary">Salary</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='second-sect sect'>
                    <div className='inputs'>
                        <label htmlFor="requirement">Requirement</label>
                        <textarea name="requirement" id="requirement" cols="30" rows="4">

                        </textarea>
                    </div>
                    <div className='inputs'>
                        <label htmlFor="link">Add external application link</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className='button'>
                <button>Post job</button>
            </div>
        </form>
        <div className='posted'>
            <h3>Posted Jobs</h3>
            <div className='posted-jobs'>
                {
                    jobs.map((job, i)=>{
                        return(
                            <div className='job-outter' key={i}>
                                <div className='border-job'>
                                    <p>{job.field}</p>
                                    <div className='fix'>
                                        <img src={Location} alt="location-icon" />
                                        <p>{job.description}</p>
                                    </div>
                                    <div className='fix'>
                                        <img src={Amount} alt="location-icon" />
                                        <p>{job.salary}</p>
                                    </div>
                                </div>
                                <div className='circle-cover'>
                                    <div className='circles'>
                                        <img src={RedGuy} alt="small-circles" />
                                        <img className='left' src={WhiteLady} alt="small-circles" />
                                        <img className='left' src={WhiteGuy} alt="small-circles" />
                                        <img className='left' src={Chinese} alt="small-circles" />
                                    </div>
                                    <p>{job.applicant} applicants</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </RecruiterHomeStyle>
  )
}

const RecruiterHomeStyle = styled.div`
width:100%;
margin:1.5rem;
margin-right:0;
padding-right:1.5rem;
h2{
    color:#121212;
    font-size:2rem;
}
form{
    .all-form{
        display:flex;
        justify-content:space-between;
        .sect{
            width:50%;
            .inputs{
                label{
                    font-size:1.5rem;
                    color:#121212;
                    margin: 1rem;
                }
                input{
                    display:block;
                    height: 50px;
                    width:90%;
                    border: 1px solid #0950CD;
                    border-radius: 40px;
                    padding: 1rem;
                    outline:none;
                    font-size:1.5rem;
                    margin:1rem 0;
                }
                textarea{
                display:block;
                border: 1px solid #0950CD;
                border-radius: 40px;
                padding: 1.5rem;
                outline:none;
                font-size:1.5rem;
                overflow:hidden;
                resize:none;
                margin:1rem 0;
                width:90%;
                }
                }
            .select{
                margin:1rem 0;
                select{
                    display:block;
                    height: 50px;
                    border: 1px solid #0950CD;
                    border-radius: 40px;
                    padding:.5rem 1rem;
                    outline:none;
                    font-size:1.2rem;
                    width:90%;
                }
            }
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
}
.posted{
    h3{
        font-size:2rem;
    }
    .posted-jobs{
        display:flex;
        justify-content:space-between;
        width:100%;
        overflow-x:auto;
        p{
            font-size:1.5rem;
        }
        .job-outter{
            width:45%;
            margin:.5rem;
            font-size:1.5rem;
            font-weight:500;
            color:#121212;
            .border-job{
                border-radius:10px;
                border:1px solid #0950CD;
                padding:1rem;
                font-size:1.5rem;
                .fix{
                    display:flex;
                    gap:1rem;
                }
            }
            .circle-cover{
                display:flex;
                margin: 2rem 0;
                gap:1rem;
                p{
                    font-size:1rem;
                }
            }
            .circles{
                display:flex;
                img{
                    width:40px;
                    height:40px;
                }
                .left{
                    margin-left:-25px;
                }
            }
        }
        .job-outter:first-child{
            .border-job{
                padding:.2rem 1rem;
            }
        }
    }
}
@media screen and (max-width: 680px){
    form{
        .all-form{
            display:block;
            .sect{
                width:100%;
            }
        }
    }
    .posted{
        .posted-jobs{
            display:block;
            .job-outter{
                width:95%;
                font-size:1rem;
            }
        }
    }
}
`
export default RecruiterHome