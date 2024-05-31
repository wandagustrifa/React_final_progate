import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import "../stylesheet.css";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<ContactForm />
				<Footer />
			</div>
		);
	}
}

export default App;
