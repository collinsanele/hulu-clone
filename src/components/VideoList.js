import React from 'react';
import VideoCard from './VideoCard';
import './VideoList.css';
import {movieContext} from '../contexts/MovieContext';
import FlipMove from 'react-flip-move';



class VideoList extends React.Component{
    static contextType = movieContext;
    
    
    componentDidMount(){
        this.context.fetchTrending()
    }
    
    render(){
        const {movies} = this.context;
        console.log(movies)
        const baseUrl = "https://image.tmdb.org/t/p/original/";

        return (
            <center className="videoList">
                <FlipMove>
                    {movies.map((movie)=> 
                        <VideoCard 
                            key={movie.id}
                            image = {`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
                            desc={movie.overview} 
                            title={movie.title || movie.name} 
                            mediaType={movie.media_type}
                            date={movie.release_date || movie.first_air_date}
                            voteCount = {movie.vote_count}
                        />
                    )}
                </FlipMove>
                
            </center>
        )
    }
}

export default VideoList;