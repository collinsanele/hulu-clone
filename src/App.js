import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import VideoList from './components/VideoList';
import {movieContext} from './contexts/MovieContext';

class App extends React.Component{
    static contextType = movieContext;
    
    render(){
        const {
        fetchTopRated, 
        fetchAction, 
        fetchTrending, 
        fetchHorror, 
        fetchRomance, 
        fetchMystery, 
        fetchSciFi,
        fetchWestern,
        fetchAnimation} = this.context;
        
        return (
        <div className="App">
          <Header />
          <Nav 
            fetchTopRated={fetchTopRated} 
            fetchAction={fetchAction} 
            fetchTrending={fetchTrending}
            fetchHorror={fetchHorror}
            fetchRomance={fetchRomance}
            fetchMystery={fetchMystery}
            fetchSciFi={fetchSciFi}
            fetchWestern={fetchWestern}
            fetchAnimation={fetchAnimation}
          />
          <VideoList />
        </div>
        );
    }
}

export default App;
