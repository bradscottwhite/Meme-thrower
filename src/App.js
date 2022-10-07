
import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import { User } from './models'

import { CreatePost } from './CreatePost'

import { Timeline } from './Timeline'
import { Card } from './Card'
import { CommentList } from './CommentList'


const App = () => {
	const [ users, setUsers ] = useState([])
	const [ user, setUser ] = useState('Select a user')

	useEffect(() => {
		const getUsers = async () => {
			setUsers(
				await DataStore.query(User)
			)
		}
		
		getUsers()

		const sub = DataStore.observe(User)
			.subscribe(() => getUsers())
		return () => {
			sub.unsubscribe()
		}
	}, [ users ])

	return (
		<div>
			<select onChange={e => setUser(e.target.value)} value={user}>
				<option value='Select a user'>Select a user</option>
				{users.map((u, i) => (
					<option value={i}>{u.username}</option>
				))}
			</select>
			{user !== 'Select a user' && <CreatePost user={users[user]}/>}

			<Timeline>
				{({ post }) => (
					<Card key={post.id}>
						<Card.Header author={post.author} />
						<Card.Main content={post.content} />
						<Card.Footer author={post.author} description={post.description}>
							<CommentList postId={post.id}/>
						</Card.Footer>
					</Card>
				)}
			</Timeline>
		</div>
	)
}

export default App;
