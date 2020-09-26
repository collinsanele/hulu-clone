import React, {createContext} from 'react';


export const movieContext = createContext();


class MovieContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    
    //Get data for Trending movies
    fetchTrending = ()=>{
        fetch("https://api.themoviedb.org/3/trending/all/week?api_key=9055835fc1742faabb67105c2c172af3&language=en-US")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.splice(0, 20)}))
    }
    
    
    
    //Get data for Top Rated movies
    fetchTopRated = ()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=9055835fc1742faabb67105c2c172af3&language=en-US")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    
    //Get data for Action movies
    fetchAction = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=28")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    //Get data for Horror movies
    fetchHorror = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=27")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    //Get data for Romannce movies
    fetchRomance = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=10749")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    
    //Get data for mystery movies
    fetchMystery = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=9648")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    //Get data for sci-fi movies
    fetchSciFi = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=878")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    
    //Get data for Western movies
    fetchWestern = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=37")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 20 ? data.results.splice(0, 20) : data.results}))
    }
    
    
    //Get data for Animation movies
    fetchAnimation = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=9055835fc1742faabb67105c2c172af3&with_genres=16")
        .then((response)=> response.json())
        .then((data)=>this.setState({movies: data.results.length > 200 ? data.results.splice(0, 200) : data.results}))
    }
    
    
    
    render(){
        return (
            <movieContext.Provider value={{...this.state, fetchTrending: this.fetchTrending, 
                                          fetchTopRated: this.fetchTopRated,
                                          fetchAction: this.fetchAction,
                                          fetchHorror: this.fetchHorror,
                                          fetchRomance: this.fetchRomance,
                                          fetchMystery: this.fetchMystery,
                                          fetchSciFi: this.fetchSciFi,
                                          fetchWestern: this.fetchWestern,
                                          fetchAnimation: this.fetchAnimation}
                                         }
            >
                                          
                                          
                {this.props.children}
            </movieContext.Provider>
        )
    }
}


export default MovieContextProvider;