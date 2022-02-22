import React from "react";

const UserListItem = ({ u, onUserSelect }) => {
	const name = u.name.title + ". " + u.name.first + " " + u.name.last;

	const nat = u.nat;

	const gender = u.gender;

	const DoB = u.DoB;

	const email = u.email;

	const phone = u.phone;

	return (
		<li onClick={() => onUserSelect(u)}>
			<div>
				<div>{name}</div>
				<div>{gender}</div>
				<div>{DoB}</div>
				<div>{nat}</div>
				<div>{email}</div>
				<div>{phone}</div>
			</div>
		</li>
	);
};

export default UserListItem;
