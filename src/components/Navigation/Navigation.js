import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className= 'f5 link dim underline pa3 pointer'>Sign Out</p>
				</nav>
				);
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signin')} className= 'f5 link dim underline pa3 pointer'>Sign In</p>
					<p onClick={() => onRouteChange('register')} className= 'f5 link dim underline pa3 pointer'>Register</p>
				</nav>
			);
		}
}

export default Navigation;