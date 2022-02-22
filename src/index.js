import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SearchBar from "./components/search_bar";
import UserList from "./components/user_list";
import UserDetail from "./components/user_detail";
import reportWebVitals from "./reportWebVitals";

class App extends Component {
	getFakeMembers = (count, nat) =>
		new Promise((resolves, rejects) => {
			const api = `https://api.randomuser.me/?nat=${nat}&results=${count}`;
			const request = new XMLHttpRequest();
			request.open("GET", api);
			request.onload = () =>
				request.status === 200
					? resolves(JSON.parse(request.response).results)
					: rejects(Error(request.statusText));
			request.onerror = (err) => rejects(err);
			request.send();
		});

	userSearch(count, nat) {
		this.getFakeMembers(count, nat).then(
			(users) => this.setState({ users, selectedNat: nat, selectedUser: 0 }),
			(err) => console.log(new Error("failed"))
		);
	}

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			selectedNat: "",
			selectedUser: "",
		};

		this.userSearch(10, "US");
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={(term) => this.userSearch(10, term)} />
				<UserList
					users={this.state.users}
					onUserSelect={(selectedUser) => this.setState({ selectedUser })}
				/>
				<UserDetail user={this.state.selectedUser} />
			</div>
		);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
