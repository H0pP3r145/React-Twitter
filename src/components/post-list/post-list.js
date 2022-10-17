import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({ posts }) => {
	const elements = posts.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<li key={id} className="list-group-item">
				<li>
					<PostListItem {...itemProps} />
				</li>
			</li>
		);
	});

	return (
		<div className="app-list-container">
			<ul className="app-list list-group">{elements}</ul>
		</div>
	);
};

export default PostList;
