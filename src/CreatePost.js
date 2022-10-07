import { useState } from 'react'

import { DataStore } from '@aws-amplify/datastore'
import { Content, TimelineItem, ContentType } from './models'

export const CreatePost = ({ user }) => {
	const [ source, setSource ] = useState('')
	const [ type, setType ] = useState('IMAGE')
	const [ description, setDescription ] = useState('')

	const handlePost = async () => {
		try {
			const content = new Content({
				source,
				type: ContentType[type]
			})
			await DataStore.save(content)
			await DataStore.save(
				new TimelineItem({
					description,
					//timelineItemAuthorId: user.id,
					//timelineItemContentId: content.id,
					author: user,
					content,
					Comments: []
				})
			)
		} catch (err) {
			console.log('error posting', err)
		}
	}

	return (
		<div>
			{user.username}
			<div>
				<select onChange={e => setType(e.target.value)} value={type}>
					<option value='IMAGE'>Image</option>
					<option value='VIDEO'>Video</option>
				</select>
				<input value={source} onChange={e => setSource(e.target.value)} placeholder={`${type === 'IMAGE' ? 'Image' : 'Video'} source url`} />
				<input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
				<button onClick={handlePost}>Post</button>
			</div>
		</div>
	)
};
