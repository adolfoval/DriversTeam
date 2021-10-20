import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import "./css/error404.css";

function Error404() {

    let location = useLocation();
    return (
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>{">:|"}</h1>
			</div>
			<h2>403 - Nope</h2>
			<p>You shall not pass!!!.</p>
			<Link to="/">home page</Link>
		</div>
	</div>

    )
}

export default Error404
