import React, { Component } from "react";
import Select from "react-select";

const options = [
	{ value: "female", label: "Female" },
	{ value: "male", label: "Male" },
	{ value: "", label: "Any" },
];

// const SearchBar = () => (
//   <Select options={options} />
// )

class GenderSearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedGender: { value: "", label: "Any" },
		};
	}

	handleChange = (selectedGender) => {
		this.setState({ selectedGender });
		this.props.onSearchTermChange(selectedGender.value);
	};

	render() {
		const { selectedGender: selectedGender } = this.state;

		return (
			<Select
				value={selectedGender}
				onChange={this.handleChange}
				options={options}
			/>
		);
	}
}

export default GenderSearchBar;
