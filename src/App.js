import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  
  //get movie list
  getMovies = async () =>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  componentDidMount(){
    this.getMovies();
  }
  //end

  render(){
    const { isLoading, movies } = this.state;
    return (
        isLoading ? (
          <div class="loader">
            <span calss="loader_text">Loading...</span>
          </div>
          ) : (
            <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />  //Movie
              ))}
            </div>
          )
        
    ) //return
  } //render
}

export default App;