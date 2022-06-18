import React from 'react';
import foto from '../assets/images/images.jfif';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
					<ul className="navbar-nav ml-auto">
						<div className=""></div>
						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item">
							<a href="http://localhost:3001/" id="userDropdown">
								<button className="btn-volver-app">Volver a la App</button>
								
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;