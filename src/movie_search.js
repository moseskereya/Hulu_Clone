import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from './Components/context'


class searches extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    FindMovie = (dispatch, e) => {
        e.preventDefault();
        const q = this.state.title;
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=${q}`)
            .then(response => {
                console.log(response.data.results)
                dispatch({
                    type: 'Search_movie',
                    payload: response.data.results
                })
            })
            .catch(error => {
                console.log("No data from api !!", error)
            })
    }


    render() {
        const search_item = this.state.title
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="search">
                            <form onSubmit={this.FindMovie.bind(this, dispatch)} className="search">
                                <input type="text" name="title"
                                    value={search_item}
                                    placeholder="Search movies"
                                    onChange={this.onChange}
                                />
                                <button type="submit" className="search_now">Search</button>
                            </form>
                        </div>
                    );
                }}

            </Consumer>
        )
    }
}


export default searches