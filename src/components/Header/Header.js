import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div className="full-app-width">
		<header className="app-container-width nav-header">
			<div className="nav-header--logo">
				<Link to="/" className="logo-container">
					LOGO
				</Link>
			</div>
			<div className="nav-header--navigation">
				<ol className="nav-header__list">
					<li className="nav-header__list--item">
						<Link to="/" className="link-color">
							Home
						</Link>
					</li>
					<li className="nav-header__list--item">
						<Link to="/" className="link-color">
							About
						</Link>
					</li>
					<li className="nav-header__list--item">
						<Link to="/" className="link-color">
							Contact Us
						</Link>
					</li>
				</ol>
				<div className="nav-header__list--item">
					<Link to="/create" className="link-color create-blog">
						New
					</Link>
				</div>
			</div>
		</header>
	</div>
);

export default Header;
