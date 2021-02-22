import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCodeSlash } from "react-icons/bs";
import 'bootstrap'
export const NavBar2 = () => {
    const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("role"));
    const inValidate = () => {
        sessionStorage.removeItem("token");
    }
    return (
        <div classNameName="container-fluid">
            <nav className="navbar navbar-expand-lg shadow-sm rounded" style={{ "backgroundColor": "#f9f7f7" }}>
                <Link to="/" className="navbar-brand"><BsCodeSlash size="2em" color="#112d4e" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <a className="nav-link" href={isAdmin === "role_admin" ? '/AddCourse' : '/'} style={{ "color": "#112d4e" }}>Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/Login" onClick={inValidate} style={{ "color": "#112d4e" }}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
