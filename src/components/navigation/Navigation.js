import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

  return (
    <nav className="navbar">
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
        <li className="nav-item">
					<Link to="/projects" className="nav-link" onClick={closeMenu}>
						Projects
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
  );
}

export default Navigation;
