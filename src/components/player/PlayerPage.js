import React from 'react';
import Carousel from '../carousel/Carousel.js'

const PlayerPage = (props) => {
	return (
		<div>
			<div id="queue-card">
				<ul>
					{
						props.songQueue.slice(props.songIndex, props.songQueue.length).map((song, index) => {
							return <li>{song.name}<button onClick={(e) => {props.removeSongFromQueue(index)}}>REMOVE</button></li>;
						})
					}
				</ul>
			</div>
			<div id="info-card">
				<Carousel urls={
				props.songQueue.slice(props.songIndex == 0 ? 0 : props.songIndex - 1, props.songIndex + 7).map((song) => {
					return song.album.cover_art;
				})}
				songQueue={props.songQueue}
				songIndex={props.songIndex}
				/>
			</div>
		</div>
	)
}

export default PlayerPage;
