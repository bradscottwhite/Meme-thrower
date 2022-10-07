import { useState, useEffect } from 'react'

import { DataStore } from '@aws-amplify/datastore'

import { Comment } from './models'

export const CommentList = ({ postId }) => {
	const [ comments, setComments ] = useState([])

	useEffect(() => {
		const getComments = async () => {
			const postComments = await DataStore.query(Comment/*, p => p.timelineitemID === postId*/)
			console.log(postComments)
			setComments(postComments)
		}
		getComments()
	}, [])

	return (
		<div>
			{comments.map(comment => (
				<div>
					<p key={comment.id}>
						<b>{comment.user.username}</b>
						{comment.body}
					</p>
				</div>
			))}
		</div>
	)
};
