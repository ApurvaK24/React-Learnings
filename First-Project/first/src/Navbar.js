//function based
import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(props){
    return(<div>
        <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">
                <Link class="navbar-brand" to="/">Start Bootstrap</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/About">About</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/Post">Sample Post</Link></li>
                        <li class="nav-item"><Link class="nav-link px-lg-3 py-3 py-lg-4" to="/Contact">Contact</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link px-lg-3 py-3 py-lg-4" onClick={props.login}>{props.status ? "Logout":"Login"}</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>)
}