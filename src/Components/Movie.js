import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieSearch from "../movie_search"
import { Consumer } from "./context"
import Spinner from "./Spinner"
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const baseUrl = "https://image.tmdb.org/t/p/original/"
        return (
            <Consumer>
                {value => {
                    const { Trending, NetFlix, Romantic, Rated, Action, Comedy, Documentary, Horos } = value;
                    if (NetFlix === undefined || NetFlix === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <div className="front_view">
                                    <h2 className="collection_title">Action Movies</h2>
                                    <MovieSearch />
                                </div>
                                <div className="movies">
                                    {Action.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h2 className="collection_title">Now Playing Movies</h2>
                                <div className="movies">
                                    {NetFlix.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <div className="ratings">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                            <p>Rating : {trend.vote_average * 10} % </p>
                                                        </div>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h2 className="collection_title">Popular Movies</h2>
                                <div className="movies">
                                    {Trending.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <h2 className="collection_title">Top Rated Movies</h2>
                                <div className="movies">
                                    {Rated.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <h2 className="collection_title">Comedy Movies</h2>
                                <div className="movies">
                                    {Comedy.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <h2 className="collection_title">Romantic Movies</h2>
                                <div className="movies">
                                    {Romantic.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <h2 className="collection_title">Documentaries Movies</h2>
                                <div className="movies">
                                    {Documentary.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                    </div>
                                                    <h4>{trend.title || trend.original_name}</h4>
                                                    <div className="movie_details">
                                                        <code className="star">
                                                            <i class="fa fa-star" aria-hidden="true"></i>
                                                        </code>
                                                        <p>Rating : {trend.vote_average * 10} % </p>
                                                        <span>Release Date : {trend.release_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <h2 className="collection_title">Horo Movies</h2>
                                <div className="movies">
                                    {Horos.map(trend => {
                                        return (
                                            <div key={trend.id} className="movies_items">
                                                <div class="box">
                                                    <div class="imgBox">
                                                        <Link to={
                                                            {
                                                                pathname: `/Movie/${trend.id}`,
                                                                state: { movie: trend.id }
                                                            }}>
                                                            <img src={`${baseUrl}/${trend.backdrop_path}`} alt="movie_img" />
                                                        </Link>
                                                        <h4>{trend.title || trend.original_name}</h4>
                                                        <div className="movie_details">
                                                            <code className="star">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </code>
                                                            <p>Rating : {trend.vote_average * 10} % </p>
                                                            <span>Release Date : {trend.release_date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        );
    }
}

export default Movie;