import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className="container footer__wrapper">
				<div className="logo">Porfolio</div>
				<ul className='menu__list'>
					<li className="menu__item"><a href="#home">Home</a></li>
					<li className="menu__item"><a href="#about">About</a></li>
					<li className="menu__item"><a href="#technology">Technology</a></li>
					<li className="menu__item"><a href="#projects">Projects</a></li>
					<li className="menu__item"><a href="#contact">Contact</a></li>
				</ul>
				<div className="social__icons">
					<FaFacebookSquare className='icon' />
					<FaInstagramSquare className='icon' />
					<FaTwitterSquare className='icon' />
				</div>
				<div className="copyright">© PORFOLIO. All right reserved.</div>
			</div>
		</div>
	)
}

export default Footer;