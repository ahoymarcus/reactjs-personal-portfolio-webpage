



const ProjectItem = ({ title, image }) => {
	
	
	return (
		<a 
			target="_blank" 
			href="https://reactjs-rocket-launches-app.netlify.app/" 
			className="project-title"
		>
			<img className="project-icon" src={image} alt="Projetos" />
			<p>
				<span>
					{title}
				</span>
			</p>
		</a>
	);
};



export default ProjectItem



