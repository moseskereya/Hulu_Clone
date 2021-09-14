import React from 'react'
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h4>The page you are looking for is not found!!</h4>
            <div className="banner_content">
                <Link to="/">
                    <button className="viewmore">Go Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
