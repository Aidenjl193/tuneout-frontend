import React from 'react';

const PlayerPage = (props) => {
	return (
		<div id="queue-card">
			<ul>
				{
					props.songQueue.map((song) => {
						return <li>{song.name}</li>;
					})
				}
			</ul>
		</div>
	)
}

export default PlayerPage;
