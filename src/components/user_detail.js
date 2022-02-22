import React from "react";

const UserDetail = ({ user }) => {
	if (!user) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div>
				<img src={user.picture.large} alt="" />
			</div>
		</div>
	);
};

export default UserDetail;
