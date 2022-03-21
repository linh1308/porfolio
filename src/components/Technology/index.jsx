import React from 'react';
import './Technology.scss';
import { FaCss3Alt, FaSass, FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';

const Technology = () => {
    return (
        <div className='technology' id='technology'>
            <div className="container technology__wrapper">
                <div className="title">Technology</div>
                <div className="technology__content">
                    <TiHtml5 className='icon'/>
                    <FaCss3Alt className='icon'/>
                    <FaSass className='icon'/>
                    <FaReact className='icon'/>
                    <SiRedux className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Technology;