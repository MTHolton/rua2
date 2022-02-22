import React from "react";

const UserListItem = ({ u, onUserSelect }) => {
	const name = u.name.title + ". " + u.name.first + " " + u.name.last;

	const nat = u.nat;
	return (
		<li onClick={() => onUserSelect(u)}>
			<div>
				<div>{name}</div>
				<div>{nat}</div>
			</div>
		</li>
	);
};

export default UserListItem;
