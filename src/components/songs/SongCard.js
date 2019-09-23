import React from 'react'

const SongCard = (props) => {
	const { song } = props;
	const color = props.index % 2 == 0 ? "#a0a0a017" : "";
	return (
		<tr className="song-card" style={{"background-color": color}}>
			<td>{ song.name }</td>
			<td><button onClick={(e) => {props.playSong(e, song)}}>ADD TO QUEUE</button></td>
			<td>{ song.album ? song.album.name : "" }</td>
			<td>00:00</td>
		</tr>
	)
}

export default SongCard;
