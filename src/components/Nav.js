import React from 'react';
import './Nav.css';


function Nav({fetchTopRated, fetchAction, fetchTrending, fetchHorror, fetchRomance, fetchMystery, fetchSciFi, fetchWestern, fetchAnimation}){
	return (
		<nav className="nav">
			<h2 onClick={()=>fetchTrending()}>Trending</h2>
			<h2 onClick={()=>fetchTopRated()}>Top Rated</h2>
			<h2 onClick={()=>fetchAction()}>Action</h2>
			<h2 onClick={()=>fetchHorror()}>Horror</h2>
			<h2 onClick={()=>fetchRomance()}>Romance</h2>
			<h2 onClick={()=>fetchMystery()}>Mystery</h2>
			<h2 onClick={()=>fetchSciFi()}>Sci-Fi</h2>
			<h2 onClick={()=>fetchWestern()}>Western</h2>
			<h2 onClick={()=>fetchAnimation()}>Animation</h2>
			
		</nav>
	)
}

export default Nav;