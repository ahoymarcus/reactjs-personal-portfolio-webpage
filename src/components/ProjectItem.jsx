import { useState } from 'react';



const ProjectItem = ({ type, title, image, urlApp, urlRepository, description, tags }) => {
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
	
	const handleMouseEnter = (e) => {
		let infoContent = e.target;
		let infoContainer = e.target.parentElement;
		console.log(infoContainer);
		
		// yellow - 
		// lighter: '#c7c770'; darker: '#74741f'
		infoContent.style.backgroundColor = '#74741f';
		
		infoContainer.classList.add('big');
		
		e.stopPropagation();
	};
	const handleMouseLeave = (e) => {
		let infoContent = e.target;
		let infoContainer = e.target.parentElement;
		console.log(infoContainer);
		
		infoContent.style.backgroundColor = '#e3d6d647';
		
		infoContainer.classList.remove('big');
	};
	
	
	
	const renderInfo = () => {
		if (active === 'description') {
			return (
				<div className="info-content">
					<h4>Description</h4>
					<p>
						{description} 
					</p>
				</div>
			);
		} else if (active === 'tags') {
			return (
				<div className="info-content">
					<h4>Tags</h4>
					<p>
						{tags.map((tag, index) => {
							return <span key={index} className="tag" >{tag} </span>;
						})}
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
			<article className="info-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
				
				<div className="btn-container">
					<h4 className="tab-header" >
						<a 
							target="_blank" 
							href={href}
						>
							{title}
						</a>
					</h4>
					<button  
						onClick={() => handleClick('description')} 
						className="tab-header btn" 
						>
							description
						</button>
					<button 
						onClick={() => handleClick('tags')}
						className="tab-header btn" 
					>
						tags
					</button>
				</div>			
				{renderInfo()}
			</article>
		</div>
	);
};



export default ProjectItem



