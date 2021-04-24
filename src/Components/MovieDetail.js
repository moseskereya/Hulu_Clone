import React, { Component } from 'react';
import Spinner from "./Spinner"
import axios from "axios"
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: [] }
    }

    componentDidMount() {
        const movie_id = this.props.location.state.movie;
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&append_to_response=videos,images,credits`)
            .then(response => {
                this.setState({ movie: response.data })
                console.log(this.state.movie)
            })
            .catch(error => {
                console.log(error, "There is no data from the movie db")
            })
    }

    render() {
        const data = this.state.movie;
        const baseUrl = "https://image.tmdb.org/t/p/original/"
        if (data === undefined || data.length === 0) {
            return <Spinner />
        } else {
            return (
                <React.Fragment>
                    <div className="detail">
                        <div className="view-detail1">
                            <img src={`${baseUrl}/${data.backdrop_path || data.poster_path}`}
                                alt="img" />
                        </div>
                        <div className="view-detail2">
                            <h1 className="title">Movie Name: {data.title}</h1>
                            <span className="star">
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </span>

                            <span>
                                Rating {data.vote_average * 10} %
                           </span>
                            <br />

                            <span> Release Date |</span>
                            <br />

                            <span className="date">
                                Release Date {data.release_date}
                            </span>
                            <p className="overview">{data.overview}</p>
                            <div className="feature">
                                <h3 className="title">Feature Crew</h3>
                                {data.credits.crew.map(crew => {
                                    return (
                                        <span>{crew.name}</span>
                                    )
                                })}
                            </div>
                            <div className="container">
                                <div className="video">
                                    <a href={`https://www.youtube.com/watch?v=${data.videos.results[0].key}`} className="play">
                                        Play Trailler
                                </a>
                                </div>
                                <div className="movie-type">
                                    {data.genres.map(genre => {
                                        return (
                                            <span className="date" key={genre.id}>{genre.name}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="title_cats">CAST</h1>
                    <div className="movies">
                        {data.credits.cast.map(trend => {
                            return (
                                <div className="movies_items">
                                    <div class="box">
                                        <div class="imgBox">
                                            <img src={`${baseUrl}/${trend.profile_path}`} alt="movie_img" />
                                        </div>
                                        <h4>{trend.name}</h4>
                                        <h4>{trend.character}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <h1 className="title_cats">Images</h1>
                    <div className="movies">
                        {data.images.backdrops.map(trend => {
                            return (
                                <div className="movies_items">
                                    <div class="box">
                                        <div class="imgBox">
                                            <img src={`${baseUrl}/${trend.file_path}`} alt="movie_img" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </React.Fragment>
            );
        }
    }
}


export default MovieDetail;