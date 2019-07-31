import React from 'react'

const SongCard = (props) => {
	const { song } = props;
	return (
		<tr className="song-card">
			<td>{ song.name }<button onClick={(e) => {props.playSong(e, song)}}>ADD TO QUEUE</button></td>
			<td>{ song.album ? song.album.name : "" }</td>
			<td>00:00</td>
		</tr>
	)
}

export default SongCard;
