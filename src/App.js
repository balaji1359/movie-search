import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={}
    

    //this.performSearch(searchTerm)
  }

  performSearch(searchTerm) {
    console.log("seraching.......")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=6c356a9956b05290257ead8ec4192700&language=en-US&page=1&include_adult=false&query=" + searchTerm
    $.ajax({
      url:urlString,
      success: (searchResults) => {
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path

          console.log(movie.title)
          const movieRow = <MovieRow key = {movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows:movieRows})

      },
      error:(xhr,status,err) => {
        console.log("Failed to load Data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50"  src="logo.svg"/>
              </td>
              <td>
                <h2>MoviesDB Search</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize:18,
          display:'block',
          width:"99%",
          paddingTop:8,
          paddingBottom:8,
          paddingLeft:16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search"/>


        {this.state.rows}

      </div>
    );
  }
}

export default App;
