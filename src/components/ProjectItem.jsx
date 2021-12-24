



const ProjectItem = ({ type, title, image, urlApp, urlRepository, description, functionalities }) => {
	let href = '';
	
	if (type === 'frontend') {
		href = urlApp;
	} else if (type === 'backend') {
		href = urlRepository;
	}
	
	
	
	return (
		<div className="project-item" >
			<a 
				target="_blank" 
				href={href}
				className="project-container"
			>
			
				<img className="project-icon" src={image} alt={`Projeto ${title}`} />
				
			</a>
			<article className="info-container">	
				<div className="btn-container">
					<button >{title}</button>
					<button >description</button>
					<button >functionalities</button>
				</div>
				<div className="content active">
					<h4>description</h4>
					<p>
						I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice
								pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean
								shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small
								batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. 
					</p>
				</div>
				<div className="content">
					<h4>functionalities</h4>
					<p>
						Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal
								deep v hella biodiesel. Church-key listicle polaroid put a bird on it
								chillwave palo santo enamel pin, tattooed meggings franzen la croix cray.
								Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu
								mumblecore. 
					</p>
				</div>
			</article>
		</div>
	);
};



export default ProjectItem



