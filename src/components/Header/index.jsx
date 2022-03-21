import React, { useEffect, useRef } from 'react';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { GiTechnoHeart } from 'react-icons/gi';
import { IoPersonOutline } from 'react-icons/io5';
import { RiContactsLine } from 'react-icons/ri';
import './Header.scss';

const Header = () => {
	const headerRef = useRef();

	useEffect(() => {
		const headerScroll = () => {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				headerRef.current.classList.add('active');
			} else {
				headerRef.current.classList.remove('active');
			}
		}

		window.addEventListener('scroll', headerScroll);

		return () => {
			window.removeEventListener('scroll', headerScroll);
		}
	}, [])


	return (
		<div className='header'>
			<div className="container header__wrapper">
				<div className="logo">
					porfolio
				</div>

				<div className="navbar">
					<a href='#home' className="navbar__item">Home</a>
					<a href='#about' className="navbar__item">About</a>
					<a href='#technology' className="navbar__item">Technology</a>
					<a href='#projects' className="navbar__item">Projects</a>
					<a href='#contact' className="navbar__item">Contact</a>
				</div>

				<div className="icons" ref={headerRef}>
					<a href="#home"><AiOutlineHome /></a>
					<a href="#about"><IoPersonOutline /></a>
					<a href="#technology"><GiTechnoHeart /></a>
					<a href="#projects"><AiOutlineProject /></a>
					<a href="#contact"><RiContactsLine /></a>
				</div>
			</div>
		</div>
	)
}

export default Header;