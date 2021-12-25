import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const OtherProjects = ({ otherProjects }) => {
	const [ index, setIndex ] = useState(0);
	
	const { title, image, urlApp, urlRepository, description, tags } = otherProjects[index];
		
	
	const checkNumber = (number) => {
		if (index > otherProjects.length - 1) {
			return 0;
		} 
		if (index < 0) {
			return otherProjects.length -1;
		}
	};
	
	
	return (
		<div className="other-projects">
			<article className="other-projects-container">
				<div class="other-project-img-container">
					<img src={image} alt={`projeto ${title}`} className="other-project-img" />
				</div>	
			</article>
			<article>
				<h4>{title}</h4>
				<p>{description}</p>
				
				<h5>Repositories:</h5>
				<h6>{urlApp}</h6>
				<h6>{urlRepository}</h6>
			</article>
		</div>
	);
};



export default OtherProjects


