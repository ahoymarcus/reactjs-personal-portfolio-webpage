// styles
import './App.css'; 

// components
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';

import frontendProjects from './data/frontendProjects';
import backendProjects from './data/backendProjects';

console.log(typeof frontendProjects);
console.log(typeof backendProjects);


function App() {


  return (
    <>
      <header>
				<Navbar />
			</header>
      <main>
				<section 
					id="welcome-section" 
					aria-label="Welcome"
				>
					<h1>Ahoooy, there! My name is Marcus Richa</h1>
					<p>Welcome to my Portfolio Webpage.</p>
				</section>
				
				<section 
					id="projects" 
					aria-label="Web Development Projects"
				>
					<h2>These are some of my projects</h2>
				
					<ProjectList type="frontend" list={frontendProjects} />
					<ProjectList type="backend" list={backendProjects} />
					
				</section>
				
				
				<section id="contact" aria-label="Contacts">
					<div className="contact-header">
						<h2>Jump on board skipper...</h2>
						<p>How do you take your coffee?</p>
					</div>
					<div className="contact-links">
						<a id="profile-link" target="_blank" href="https://github.com/ahoymarcus"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>
						<a id="profile-link" target="_blank" href="https://www.freecodecamp.org/ahoymarcus"><i className="fa fa-free-code-camp" aria-hidden="true"></i>FreeCodeCamp</a>
						<a id="profile-link" target="_blank" href="https://web.digitalinnovation.one/home"><i className=""></i>Digital Innovation One</a>
					</div>
			
				</section>
				
			</main>
			
			
			<footer>
				<p>
					Marcus Vinícius Richa - Web Developer
				</p>
			</footer>
    </>
  );
}



export default App;



