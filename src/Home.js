import React from 'react'
import Movie from './Components/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "./Components/context"
import Detail from "./Components/MovieDetail"
import Nav from './Components/Nav';
import Banner from "./Banner"
import NotFound from './404';


function Home() {
    return (
        <Provider>
            <Router>
                <React.Fragment>
                    <div className="App">
                        <Nav />
                        <Switch>
                            <Route exact path="/"
                                component={Banner} />
                            <Route path="/movies" component={Movie} />
                            <Route path="/movie/:Id" component={Detail} />
                            <Route path="*" component={NotFound} />

                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default Home