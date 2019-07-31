import React from 'react';
import api from '../../Api'
import './SongList.css'
import SongCard from './SongCard'

const SongList = (props) => {
	const { songs } = props;

	const playSong = (e, song) => {
		fetch(`${api.songs}${song.id}`)
			.then(resp => resp.json())
			.then(props.addSongToQueue)
	}
	
	return(
		<table class="song-list">
			<tr>
				<th>SONG</th>
				<th>ALBUM</th>
				<th>TIME</th>
			</tr>
			{
				songs.map((song) => {
					return 	(
						<SongCard song={song} playSong={playSong} />
					)
				})
			}

		</table>
	)
}

export default SongList;
