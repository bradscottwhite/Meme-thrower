

export const Card = ({ children }) => {
	

	return (
		<div>
			{children}
		</div>
	)
}

Card.Header = ({ author }) => (
	<div>
		<img alt={author.username} src={author.profilePic} className='w-10 h-10 rounded-4xl' />
		<div>
			<h4>{author.name}<b>@{author.username}</b></h4>
		</div>
		<div>
			&hellip;
		</div>
	</div>
)	

Card.Main = ({ content }) => {
	let cardContent
	if (content.type === 'VIDEO')
		cardContent = (
			<video controls>
				<source src={content.source} />
			</video>
		)
	else
		cardContent = <img
			src={content.source}
			alt={content.description}
		/>

	return (
		<div>
			{cardContent}
		</div>
	)
}

Card.Footer = ({ author, description, children}) => {
	return (
		<div>
			<div>
				<div>
					<button>Add</button>
				</div>
				<div>
					<button>Comment</button>
				</div>
				<div>
					<button>Email</button>
				</div>

				<div>
					<h4>{author.name}<b>@{author.username}</b></h4>
					{description}
				</div>
			</div>

			<div>
				{children}
			</div>

			<div>
				<p>2 HOURS AGO</p>
			</div>
		</div>
	)
};
