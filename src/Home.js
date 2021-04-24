import React from 'react'
import Movie from './Components/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "./Components/context"
import Show from "./Components/Show"
import Detail from "./Components/MovieDetail"
import Nav from './Components/Nav';
import Banner from "./Banner"


function Home() {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <div className="App">
                        <Nav />
                        <hr/>
                        <Switch>
                            <Route exact path="/" component={Banner} />
                            <Route path="/movies" component={Movie} />
                            <Route exact path="/Shows" component={Show} />
                            <Route path="/Movie/:Id" component={Detail} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default Home