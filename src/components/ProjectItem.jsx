



const ProjectItem = ({ type, title, image, urlApp, urlRepository }) => {
	let href = '';
	
	if (type === 'frontend') {
		href = urlApp;
	} else if (type === 'backend') {
		href = urlRepository;
	}
	
	return (
		<a 
			target="_blank" 
			href={href}
			className="project-title"
		>
			<img className="project-icon" src={image} alt={`Projeto ${title}`} />
			<p>
				<span>
					{title}
				</span>
			</p>
		</a>
	);
};



export default ProjectItem



