import React, { Component } from 'react';
import axios from 'axios'
import Spinner from './Components/Spinner'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerimg: ''
        }
    }

    componentDidMount() {
        const api_key = "fa1875db1f08a7d5f9887db721a0a94e";
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
            .then(response => {
                this.setState({ bannerimg: response.data.results[Math.floor(Math.random() * response.data.results.length - 1)] })
                console.log(this.state.bannerimg)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const banner = this.state.bannerimg;
        const baseUrl = "https://image.tmdb.org/t/p/original/"

        if (banner === 'undefined' || banner.length === 0) {
            return <Spinner />
        }

        return (
            <div className="banners"
                style={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${baseUrl}/${banner.poster_path || banner.backdrop_path})`
                }}>
            </div>
        );
    }
}

export default Banner;
