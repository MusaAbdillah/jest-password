const React = require("react")
const ReactDOM = require("react-dom")
const Password = require("./password.jsx")
class App extends React.Component {
	render(){
		return(
			<div>
				{console.log("I am app component!")}
			</div>
		)
	}
}

ReactDOM.render(<Password />, document.getElementById("password"))