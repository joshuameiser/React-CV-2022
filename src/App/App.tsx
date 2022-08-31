import { Layout } from "../pages/Layout/Layout";
import "./App.css";

function App() {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	return (
		<div className="App">
			<Layout />
		</div>
	);
}

export default App;
