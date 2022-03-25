import React from 'react';
import ecmImg from '../../images/ecommerce-project.png';
import movieImg from '../../images/mv-project.png';
import todoImg from '../../images/todo-project.png';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='projects' id='projects'>
			<div className="container projects__wrapper">
				<div className="title">Projects</div>
				<div className="project__list">
					<div className="project__item">
						<div className="project__item--image">
							<img src={todoImg} alt="todo" />
						</div>

						<div className="project__item--content">
							<div className="name">Todo list</div>
							<div className="desc">Features: Add, edit, delete, check task completed</div>
							<div className="technologies">Technology: ReactJS, Redux Toolkit, Sass</div>
						</div>

						<div className="project__item--link">
							<a href="https://github.com/linh1308/todo" target="_blank" rel="noreferrer">Github</a>
							<a href="https://todo-app-demo0302.netlify.app" target="_blank" rel="noreferrer">Demo</a>
						</div>
					</div>
					<div className="project__item">
						<div className="project__item--image">
							<img src={movieImg} alt="movie" />
						</div>

						<div className="project__item--content">
							<div className="name">Movie App</div>
							<div className="desc">Features: Watch Trailer, Search, See Detail Movie</div>
							<div className="api">API: TMDB</div>
							<div className="technologies">Technology: ReactJS, Sass, Swiper</div>
						</div>

						<div className="project__item--link">
							<a href="https://github.com/linh1308/movie-app" target='_blank' rel='noreferrer'>Github</a>
							<a href="https://movies-app-demo0302.netlify.app" target='_blank' rel='noreferrer'>Demo</a>
						</div>
					</div>
					<div className="project__item">
						<div className="project__item--image">
							<img src={ecmImg} alt="ecommerce" />
						</div>

						<div className="project__item--content">
							<div className="name">Ecommerce App</div>
							<div className="desc">Features: Add Product To Cart, Edit Quantity, Delete Product In Cart, Sort By Type, See Detail Product</div>
							<div className="api">API: Fakestore</div>
							<div className="technologies">Technology: ReactJS, Redux Toolkit, Sass</div>
						</div>

						<div className="project__item--link">
							<a href="https://github.com/linh1308/store-app" target="_blank" rel="noreferrer">Github</a>
							<a href="https://store-app-123.netlify.app" target="_blank" rel="noreferrer">Demo</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;
