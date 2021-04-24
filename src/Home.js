import React from 'react'
import Movie from './Components/Movie';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "./Components/context"
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
                            <Route exact path="/home" component={Banner} />
                            <Route path="/hulumovies" component={Movie} />
                            <Route path="/Movie/:Id" component={Detail} />
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default Home