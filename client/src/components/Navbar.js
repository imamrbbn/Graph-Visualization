import React from 'react'
import { Link, useHistory } from "react-router-dom"

export default function Navbar() {
	const history = useHistory()
	
	function logout() {
		localStorage.clear()
		history.push('/')
	}
	
    return (
			<nav className="navbar navbar-expand-lg navbar-light shadow px-4" >

			<Link className="navbar-brand navbarTitle" to="/" 
				style={{color:'white', fontSize:'1.4em', fontWeight: 'bold'}}
				>	Graph Ai! </Link>
			
			<button className="navbar-toggler" type="button" data-toggle="collapse" 
				data-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" 
				aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto mr-3">

					<li className={history.location.pathname == '/dashboard' ? 
						'nav-item active' : 'nav-item'}>
							<Link className="nav-link" to="/dashboard">Dashboard</Link>
					</li>

					<li className={history.location.pathname == '/people-list' ? 
						'nav-item active' : 'nav-item'}>
							<Link className="nav-link" to="/people-list"> People List</Link>
					</li>
					
				</ul>

				<span className="">
					<button className=" btn btn-secondary" id="borderButton" onClick={logout}
						>Logout </button>
				</span>

			</div>
		</nav>
    )
	}
