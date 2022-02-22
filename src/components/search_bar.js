import React, { Component } from "react";
import Select from "react-select";

const options = [
	{ value: "US", label: "United States" },
	{ value: "GB", label: "Great Britain" },
	{ value: "CH", label: "China" },
];

// const SearchBar = () => (
//   <Select options={options} />
// )

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: { value: "US", label: "United States" },
		};
	}

	handleChange = (term) => {
		this.setState({ term });
		this.props.onSearchTermChange(term.value);
	};

	render() {
		const { term } = this.state;

		return (
			<Select value={term} onChange={this.handleChange} options={options} />
		);
	}
}

export default SearchBar;
