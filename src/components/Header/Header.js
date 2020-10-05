import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<>
		<header className="header">
			<nav className="nav-header">
				<div>
					<p>LOGO</p>
				</div>
				<ol>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/">About</NavLink>
					</li>
					<li>
						<NavLink to="/">Blog</NavLink>
					</li>
					<li>
						<NavLink to="/">Contact</NavLink>
					</li>
				</ol>
				<div>
					<p>LOGIN</p>
				</div>
			</nav>
		</header>
	</>
);

export default Header;
