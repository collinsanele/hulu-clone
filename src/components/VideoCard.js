import React, {forwardRef} from 'react';
import './VideoCard.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



const VideoCard= forwardRef((props, ref)=>{
    //https://image.tmdb.org/t/p/original//86L8wqGMDbwURPni2t7FQ0nDjsH.jpg
   const {title, desc, mediaType, date, voteCount, image} = props
	return (
		<div ref={ref} className="videoCard">
			<img src={image} alt="movie-img" />
			
			<p>
				<span>{desc.length=== 100 ? desc : desc.slice(0, 100)+ " ...."}</span>
			</p>
			
			<h2>{title}</h2>
			
			<p className="videoCard__stats">
				<span>{mediaType}</span>
				<FiberManualRecordIcon style={{fontSize: "8px"}}/>
				<span>{date}</span>
				<FiberManualRecordIcon style={{fontSize: "8px"}}/>
				<ThumbUpIcon />
				<span>{voteCount}</span>
			</p>
			
		</div>
	)
})

export default VideoCard;