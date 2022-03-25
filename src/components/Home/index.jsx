import React from 'react';
import Typical from 'react-typical';
import avatar from '../../images/avatar.png';
import './Home.scss';

const Home = () => {
	return (
		<div className='home' id='home'>
			<div className="container-fluid home__wrapper">
				<div className="home__content">
					<p className="title">Hi 👋, My name is Linh</p>
					<Typical
						steps={["I'm front-end developer 😊", 1000, "I'm looking for intern front-end job 🔎", 1500, "Please check my porfolio 😎", 1000]}
						loop={Infinity}
						wrapper="p"
					/>
				</div>

				<div className="home__image">
					<img src={avatar} alt="avatar" />
				</div>
			</div>
		</div>
	)
}

export default Home;