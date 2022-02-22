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

class NatSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedNat: { value: "US", label: "United States" },
		};
	}

	handleChange = (selectedNat) => {
		this.setState({ selectedNat });
		this.props.onSearchTermChange(selectedNat.value);
	};

	render() {
		const { selectedNat } = this.state;

		return (
			<Select
				value={selectedNat}
				onChange={this.handleChange}
				options={options}
			/>
		);
	}
}

export default NatSearchBar;
