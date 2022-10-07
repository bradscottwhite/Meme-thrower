import { useState, useEffect } from 'react'

import { DataStore } from '@aws-amplify/datastore'

import { TimelineItem } from './models'

export const Timeline = ({ children }) => {
	const [ timeline, setTimeline ] = useState([])

	useEffect(() => {
		const getTimeline = async () => {
			const timelineData = await DataStore.query(TimelineItem)
			setTimeline(timelineData)
		}
		getTimeline()
	}, [])

	return (
		<div>
			{timeline.map(post => children({ post }))}
		</div>
	)
};
