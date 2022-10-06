
import { useState, useEffect } from 'react'

//import { fetchUser } from './servs/userFns'

import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'

import { v4 as uuid } from 'uuid'

import { API, Storage } from 'aws-amplify'
import { createMeme as CreateProduct } from './graphql/mutations'
import { listMemes as ListProducts } from './graphql/queries'

const {
	aws_user_files_s3_bucket_region: region,
	aws_user_files_s2_bucket: bucket
} = awsExports

Amplify.configure(awsExports)

const App = () => {
	let authUser

	useEffect(() => {
		//fetchUser(authUser)
	}, [ authUser ])

	const [ file, updateFile ] = useState(null)
	const [ productName, updateProductName ] = useState('')
	const [ products, updateProducts ] = useState([])

	useEffect(() => {
		listProducts()
	}, [])

	const listProducts = async () => {
		const products = await API.graphql({
			query: ListProducts//...???!!
		})
		updateProducts(products.data.listProducts.items)
	}

	const handleChange = event => {
		const { target: { value, files } } = event
		const fileForUpload = files[0]
		updateProductName(fileForUpload.name.split('.'[0]))
		updateFile(fileForUpload || value)
	}

	const createProduct = async () => {
		if (file) {
			const extension = file.name.split('.')
			const { type: mimeType } = file
			const key = `images/${uuid()}${productName}.${extension}`
			const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
			const inputData = {
				/*name*/ content: productName,
				/*image*/ memeImage: url,
				/*...*/
			}

			try {
				await Storage.put(key, file, {
					contentType: mimeType
				})
				await API.graphql({
					query: CreateProduct,
					variables: { input: inputData },
					//authMode: 'AMAZON_COGNITO_USER_POOLS'
				})
			} catch (err) {
				console.log('error', err)
			}
		}
	}

	return (
		<div>
			<Authenticator>
				{({ signOut, user }) => {
					authUser = user

					return (
						<main>
							<h1 className='text-3xl drop-shadow-xl text-blue-400 p-20'>Howdy {user.attributes.name}!</h1>
							<div>
								<input
									type='file'
									onChange={handleChange}
								/>
								<input
									placeholder='Product name'
									value={productName}
									onChange={e => updateProductName(e.target.value)}
								/>
								<button onClick={createProduct}>Create image</button>
								{products.map((p, i) => (
									<img
										key={i}
										src={p.image}
									/>
								))}
							</div>
							<button onClick={signOut}>Sign Out</button>
						</main>
					)
				}}
			</Authenticator>
		</div>
	)
}

export default App;
