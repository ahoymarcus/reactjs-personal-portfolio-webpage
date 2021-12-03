import React from 'react';

import './home.css';
import { useGlobalContext } from '../context';



const Home = () => {
		const data = useGlobalContext();
		console.log(data);
		
		

    return (
        <div className="home-container">
            <header className="home-header">
							<h1>Rocket-X Launches</h1>
							<p>Acompanhe os esforços da empresa Space X no desenvolvimento de seus novos foguetes conhecendo um pouco sobre seus lançamentos</p>
							
						</header>
						<main className="home-main">
							<section className="home-info">
								<h2>Acompanhe conosco</h2>
								<ul>
									<li>Next Launch</li>
									<li>Next Launches</li>
									<li>Last Launch</li>
									<li>Past Launches</li>
								</ul>
							</section>
							<img src="./images/space-x-rest-api.jpg" alt="Plataforma de lançamento da Space X" />
						</main>
        </div>
    );
}; 



export default Home


