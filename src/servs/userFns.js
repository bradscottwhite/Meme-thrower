

import { API } from 'aws-amplify'
import { getUser } from '../graphql/queries'
import { createUser, updateUser, deleteUser } from '../graphql/mutations'

export const fetchUser = async user => {
	const id = user.sub
	const { data } = await API.graphql({
		query: getUser,
		variables: { id } //????
	})
	console.log('getUser data:', data)
	if (!data.getUser) {
		try {
			const userInput = {
				id, //????
				username: user.username,
				email: user.attributes.email,
				name: user.attributes.name
			}
			console.log('new user input:', userInput)
			const newUser = await API.graphql({
				query: createUser,
				variables: { input: userInput },
				authMode: 'AMAZON_COGNITO_USER_POOLS'
			})
			console.log('User data:', newUser)
		} catch (err) {
			console.log('error registering new user:', err)
		}
	}
};
