import React, { Component } from 'react'
import axios from 'axios';
import Movies from '../Movies/Movies';
export default class Home extends Component {
    // let x='Habiba';
    // let z='name';
    // let y={name:x,age:30}
    // console.log(y[z]); it will log Habiba

    state = { movie: [], tv: [] };
    getTrending = async (mediaType) => {
        let { data } = await axios.get(` https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=52bbcddeda849047525b51d6f8a12361`);// destruct
        this.setState({
            [mediaType]: data.results
        });
    }
    componentDidMount() { // getTrending get called when all the component is loaded
        this.getTrending('movie');
        this.getTrending('tv');

    }
    movieDetails = ({ target }) => {
        let source = target.src;
        let index;
        for (var i = 0; i < (this.state.movie).length; i++) {
            if (("https://image.tmdb.org/t/p/original" + this.state.movie[i].poster_path) == source) {
                index = i;
            }
        }
        this.props.history.push({
            pathname: '/movies',
            state: {
                title: this.state.movie[index].original_title,
                overview: this.state.movie[index].overview,
                popularity: this.state.movie[index].popularity,
                releaseDate: this.state.movie[index].release_date,
                posterPath: "https://image.tmdb.org/t/p/original" + this.state.movie[index].poster_path,
                voteCount: this.state.movie[index].vote_count,
                voteAverage: this.state.movie[index].vote_average
            },
        });
    }
    tvDetails = ({ target }) => {
        let source = target.src;
        let index;
        for (var i = 0; i < (this.state.tv).length; i++) {
            if (("https://image.tmdb.org/t/p/original" + this.state.tv[i].poster_path) == source) {
                index = i;
            }
        }
        this.props.history.push({
            pathname: '/tv',
            state: {
                title: this.state.tv[index].original_name,
                overview: this.state.tv[index].overview,
                popularity: this.state.tv[index].popularity,
                releaseDate: this.state.tv[index].first_air_date,
                posterPath: "https://image.tmdb.org/t/p/original" + this.state.tv[index].poster_path,
                voteCount: this.state.tv[index].vote_count,
                voteAverage: this.state.tv[index].vote_average
            },
        });
    }
    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="space">
                                <div className="brdr mt-5 w-25"></div>
                                <h2 className='mt-3'>Trending <br /> Movies <br />To Watch Now</h2>
                                <div className="brdr w-100"></div>
                                <p className='secondFontColor mt-3'>Most Watched Movies By Days</p>

                            </div>
                        </div>
                        {this.state.movie.slice(0, 10).map(
                            (value, index) => {
                                return (
                                    <div onClick={this.movieDetails} key={index} className="col-md-2">
                                        <div className="movie text-center">
                                            <img className='w-100 point' src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt="" />
                                            <h5 className='mt-4'>{value.original_title}</h5>
                                            <span className='vote'>{parseFloat(value.vote_average).toFixed(1)}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                        <div className="col-md-4 ">
                            <div className="space">
                                <div className="brdr mt-5 w-25"></div>
                                <h2 className='mt-3'>Trending <br /> Tv Shows <br />To Watch Now</h2>
                                <div className="brdr w-100"></div>
                                <p className='secondFontColor mt-3'>Most Watched Movies By Days</p>

                            </div>
                        </div>
                        {this.state.tv.slice(0, 10).map(
                            (value, index) => {
                                return (
                                    <div onClick={this.tvDetails} key={index} className="col-md-2 mt-4">
                                        <div className="movie text-center">
                                            <img className='w-100 point' src={"https://image.tmdb.org/t/p/original" + value.poster_path} alt="" />
                                            <h5 className='mt-4'>{value.original_title}</h5>
                                            <span className='vote'>{parseFloat(value.vote_average).toFixed(1)}</span>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </>
        )

    }
}
