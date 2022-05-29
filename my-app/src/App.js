import VanillaConnectionComponent from './VanillaConnectionComponent';
import navbar from './navbar';
import * as React from 'react';

window.onload = function() {
	localStorage.clear();
};

function App() {
	return (
    <header>
      <div>
				<VanillaConnectionComponent />
		</div>
    </header>
	);
}

export default App;