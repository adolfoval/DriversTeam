import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import "./css/error404.css";

function Error404() {

    let location = useLocation();
    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>:(</h1>
			</div>
			<h2>404 - Page "{location.pathname}" not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link to="/Inicio">home page</Link>
		</div>
	</div>

    )
}

export default Error404
