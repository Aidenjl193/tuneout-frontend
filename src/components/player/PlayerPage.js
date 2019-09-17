import React from 'react';

const PlayerPage = (props) => {
	return (
		<div>
			<div id="queue-card">
				<ul>
					{
						props.songQueue.map((song, index) => {
							return <li>{song.name}<button onClick={(e) => {props.removeSongFromQueue(index)}}>REMOVE</button></li>;
						})
					}
				</ul>
			</div>
			<div id="info-card">
				<div id="album-image">
					{
						props.songQueue[0] ?	<img src={`http://localhost:3000/${props.songQueue[0].album.cover_art}`} /> : ""
					}
				</div>
			</div>
		</div>
	)
}

export default PlayerPage;
