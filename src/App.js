import { BrowserRouter as Router } from 'react-router-dom';
import 'static/css/global.css'
import 'static/css/transition-group.css'
import Display from 'Display/Display';

function App() {
	return (
		<>
			<Router>
				<Display/>
			</Router>
		</>
	);
}

export default App;