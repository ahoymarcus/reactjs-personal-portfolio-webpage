import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const OtherProjects = ({ otherProjects }) => {
	const [ index, setIndex ] = useState(0);
	
	const { title, image, urlApp, urlRepository, description, tags } = otherProjects[index];
	
	//console.log(tags);
	
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
				<div class="other-projects-img-container">
					<img src={image} alt={`projeto ${title}`} className="other-project-img" />
				</div>	
			</article>
			<article className="other-projects-info">
				<h4>{title}</h4>
				<p>
					{description}
				</p>
				<div className="tags">
					<ul>
						{tags.map((tag, index) => {
							return <p key={index}>#{tag}</p>;
						})}
					</ul>
				</div>
				<div className="repositories">
					<h6><a target="_blank" href={urlApp}>NetLify App</a></h6>
					<h6><a target="_blank" href={urlRepository}>Github repository</a></h6>
				</div>
			</article>
		</div>
	);
};



export default OtherProjects


