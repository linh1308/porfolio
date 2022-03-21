import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Technology from './components/Technology';


function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Technology />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
