import React from 'react'


class MovieRow extends React.Component {

    viewMovie() {
        const movie_url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = movie_url 
    }

    render() {
        return <div>
            <table key={this.props.movie.id}>
            <tbody>
                <tr>
                <td>
                    <img alt="loading.." width="150" src={this.props.movie.poster_src}/>
                </td>
                <td width="2%"> </td>
                <td>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    }
}

export default MovieRow