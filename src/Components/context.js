import React, { Component } from 'react'
import axios from "axios"

const Context = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'Search_movie':
            return {
                ...state,
                Action: action.payload,
            };
        default:
            return state
    }
}

export class Provider extends Component {
    state = {
        Trending: [],
        Netflix: [],
        Romantic: [],
        Rated: [],
        Action: [],
        Comedy: [],
        Documentary: [],
        Horos: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        const base_url = "https://api.themoviedb.org/3"

        const Action = `discover/movie?api_key=${api_key}&with_genres=28`;
        const TopRate = `movie/top_rated?api_key=${api_key}&language=en-US`;
        const trending = `trending/all/week?api_key=${api_key}&language=en-US`
        const NetFlix = `discover/tv?api_key=${api_key}&with_networks=213`;
        const Comedy = `discover/movie?api_key=${api_key}&with_genres=35`;
        const Horo = `discover/movie?api_key=${api_key}&with_genres=27`;
        const Romantic = `discover/movie?api_key=${api_key}&with_genres=10749`;
        const Documentarie = `discover/movie?api_key=${api_key}&with_genres=99`;

        axios.get(`${base_url}/${trending}`)
            .then(response => {
                this.setState({ Trending: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })

        axios.get(`${base_url}/${NetFlix}`)
            .then(response => {
                this.setState({ NetFlix: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })

        axios.get(`${base_url}/${Action}`)
            .then(response => {
                this.setState({ Action: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })
        axios.get(`${base_url}/${Documentarie}`)
            .then(response => {
                this.setState({ Documentary: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })
        axios.get(`${base_url}/${TopRate}`)
            .then(response => {
                this.setState({ Rated: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })
        axios.get(`${base_url}/${Comedy}`)
            .then(response => {

                this.setState({ Comedy: response.data.results })

            })
            .catch(erorr => {
                console.log(erorr)
            })
        axios.get(`${base_url}/${Horo}`)
            .then(response => {
                this.setState({ Horos: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })
        axios.get(`${base_url}/${Romantic}`)
            .then(response => {
                this.setState({ Romantic: response.data.results })
            })
            .catch(erorr => {
                console.log(erorr)
            })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

