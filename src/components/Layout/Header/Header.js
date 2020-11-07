import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo/Logo';
import headerStyle from './header.module.scss';

const Header = () => (
	<>
		<header className={headerStyle.Header}>
			<nav className={headerStyle.NavHeader}>
				<div>
					<NavLink to="/" className={headerStyle.NavLink}>
						<Logo />
					</NavLink>
				</div>
				<ol className={headerStyle.NavList}>
					<li>
						<NavLink to="/" className={headerStyle.NavLink}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/blog" className={headerStyle.NavLink}>
							Blog
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className={headerStyle.NavLink}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to="/login" className={headerStyle.NavLink}>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink to="/register" className={headerStyle.NavLink}>
							Register
						</NavLink>
					</li>
				</ol>
				<div className={headerStyle.CreateBlog}>
					<NavLink to="/create">Create Blog</NavLink>
				</div>
			</nav>
		</header>
	</>
);

export default Header;
