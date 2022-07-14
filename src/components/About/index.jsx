import React from 'react';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaAddressCard, FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail, MdSchool } from 'react-icons/md';
import './About.scss';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="container about__wrapper">
                <div className="title">About me</div>
                <div className="about__content">
                    <div className="information">
                        <div className="information__item"><BsPersonLinesFill /> Nguyen Hoang Linh</div>
                        <div className="information__item"><FaBirthdayCake /> 13/08/2000</div>
                        <div className="information__item"><FaAddressCard /> Long An</div>
                        <div className="information__item"><MdSchool /> University Of Information Technology</div>
						<div className="information__item"><FaPhoneAlt /> 0965003356</div>
						<div className="information__item"><MdEmail /> linh.nh0813@gmail.com</div>
                    </div>

                    <div className="desc">
                        I am Front-end developer and i am looking for Front-end job. My goal is improve my knowledge and skills.
                        After that, i want to learn Back-end skill and become Fullstack developer.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;