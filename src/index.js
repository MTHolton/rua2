import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NatSearchBar from "./components/nat_search_bar";
import GenderNatSearchBar from "./components/gender_search_bar";
import UserList from "./components/user_list";
import UserDetail from "./components/user_detail";
import reportWebVitals from "./reportWebVitals";

//display gender
//more info per person
//bootstrap

class App extends Component {
	getFakeMembers = (count, nat, gender) =>
		new Promise((resolves, rejects) => {
			const api = `https://api.randomuser.me/?nat=${nat}&gender=${gender}&results=${count}`;
			const request = new XMLHttpRequest();
			request.open("GET", api);
			request.onload = () =>
				request.status === 200
					? resolves(JSON.parse(request.response).results)
					: rejects(Error(request.statusText));
			request.onerror = (err) => rejects(err);
			request.send();
		});

	userSearch(count, nat, gender) {
		this.getFakeMembers(count, nat, gender).then(
			(users) =>
				this.setState({
					users,
					selectedNat: nat,
					selectedGender: gender,
					selectedUser: 0,
				}),
			(err) => console.log(new Error("failed"))
		);
	}

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			selectedNat: "",
			selectedUser: "",
			selectedGender: "",
		};

		this.userSearch(10, "US", "");
	}

	render() {
		return (
			<div>
				<NatSearchBar
					onSearchTermChange={(selectedNat) =>
						this.userSearch(10, selectedNat, this.state.selectedGender)
					}
				/>
				<GenderNatSearchBar
					onSearchTermChange={(selectedGender) =>
						this.userSearch(10, this.state.selectedNat, selectedGender)
					}
				/>
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
