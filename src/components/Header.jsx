import React from "react";
import { Link } from "react-router";

export default function Header() {
    return (
        //   <nav>
        //     <Link to="/">Movie List</Link>
        //     <Link to="/watchlist">Watchlist</Link>

        //   </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Movies App
                </span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">
                            Movies List
                        </Link>
                        <Link className="nav-link" to="/watchlist">
                            Watchlist
                        </Link>
                        <Link className="nav-link" to="/signup">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
