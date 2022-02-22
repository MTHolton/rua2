import React from "react";
import UserListItem from "./user_list_item";

const UserList = (props) => {
	const userItems = props.users.map((user) => {
		return (
			<UserListItem
				key={user.id.value}
				u={user}
				onUserSelect={props.onUserSelect}
			/>
		);
	});

	return <ul>{userItems}</ul>;
};

export default UserList;
