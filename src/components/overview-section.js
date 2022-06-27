import React from 'react';
import { OverviewStyle } from '../style';
import InnotalsRec from '../assets/images/Rectangle 154.png'


const OverviewSection = () => {
  return (
    <OverviewStyle>
        <div className='head'>
            <h2>Overview</h2>
            <div></div>
        </div>
        <div className='overview-text'>
            <div className='texts'>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius modi eos ipsum mollitia tempore consectetur rerum maxime doloremque unde delectus inventore, aliquid magni reiciendis dicta? Ipsam placeat impedit doloribus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis doloremque nulla suscipit dolores architecto. Molestiae odit fugiat aspernatur culpa ea nihil blanditiis magni id! Expedita dolorem velit molestias quisquam!</p>
                </div>
            </div>
            <div className='box-images'><img src={InnotalsRec} alt='innotals' /></div>
        </div>
    </OverviewStyle>
  )
}


export default OverviewSection;