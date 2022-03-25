import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import './Contact.scss';

const Contact = () => {
	const formRef = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleFormSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_g4rlna5', 'template_selrjwv', formRef.current, '8JX8geFrvEqhWCHwG');
		setName('');
		setEmail('');
		setMessage('');
	}

	return (
		<div className='contact' id='contact'>
			<div className="container contact__wrapper">
				<div className="title">Contact</div>
				<form className="contact__form" ref={formRef} onSubmit={handleFormSubmit}>
					<input type="text" name='name' placeholder='Your Full Name' value={name} onChange={(e) => setName(e.target.value)} />
					<input type="email" name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
					<textarea name="message" id="msg" placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}/>
					<button type='submit' className="btn">Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Contact;