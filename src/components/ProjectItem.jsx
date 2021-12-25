import { useState } from 'react';



const ProjectItem = ({ type, title, image, urlApp, urlRepository, description, functionalities }) => {
	const [ active, setActive ] = useState('description');
		
	
	let href;
	if (type === 'frontend') {
		href = urlApp;
	} else if (type === 'backend') {
		href = urlRepository;
	}
	
	
	const handleClick = (btnInfo) => {
		setActive(btnInfo);
	};
	
	
	
	const renderInfo = () => {
		if (active === 'description') {
			return (
				<div className="info-content active">
					<h4>Description</h4>
					<p>
						I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts. 
					</p>
				</div>
			);
		} else if (active === 'functions') {
			return (
				<div className="info-content">
					<h4>Functionalities</h4>
					<p>
						Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it.
					</p>
				</div>
			);
		}
	};
	
	
	
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
					<h4 className="tab-header" ><a target="_blank" href={href}>{title}</a></h4>
					<button  onClick={() => handleClick('description')} className="tab-header btn" >description</button>
					<button onClick={() => handleClick('functions')} className="tab-header btn" >functions</button>
				</div>			
				{renderInfo()}
			</article>
		</div>
	);
};



export default ProjectItem



