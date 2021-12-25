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
		<article className="other-projects">
			<p>other projects</p>
		</article>
	);
};



export default OtherProjects


