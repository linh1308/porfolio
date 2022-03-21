import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<div className='contact' id='contact'>
			<div className="container contact__wrapper">
				<div className="title">Contact</div>
				<form className="contact__form">
					<input type="text" placeholder='Your Full Name' />
					<input type="text" placeholder='Your Email' />
					<textarea name="message" id="msg" placeholder='Your Message' />
					<button className="btn">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Contact;