import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { Layout } from "../pages/Layout/Layout";
import "./App.css";

i18n.use(initReactI18next).init({
	resources: {
		en: { translation: "" },
		de: { translation: "" },
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

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
