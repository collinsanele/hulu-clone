import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';



function Header(){
	return (
		<div className="header"> 
			<div className="header__iconContainer">
				<div className="header__icon active">
					<HomeIcon />
					<p>HOME</p>
				</div>
				
				<div className="header__icon">
					<FlashOnIcon />
					<p>TRENDING</p>
				</div>
				
				<div className="header__icon">
					<LiveTvIcon />
					<p>VERIFIED</p>
				</div>
				
				<div className="header__icon">
					<VideoLibraryIcon />
					<p>COLLECTIONS</p>
				</div>
				
				<div className="header__icon">
					<SearchIcon />
					<p>SEARCH</p>
				</div>
				
				<div className="header__icon">
					<PersonOutlineIcon />
					<p>ACCOUNT</p>
				</div>
			</div>
			<div className="header__image">
				<img alt="hulu" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" />
			</div>
		</div>
	)
}


export default Header;