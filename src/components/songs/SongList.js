import React from 'react';
import api from '../../Api'
import './SongList.css'

const SongList = (props) => {
	const { songs } = props;

	const playSong = (e, song) => {
		fetch(`${api.songs}${song.id}`)
			.then(resp => resp.json())
			.then(props.setCurrentSong)
	}
	
	return(
		<ul class="song-list">
			{
				songs.map((song) => {
					return 	(
						<li>{ song.name }<button onClick={(e) => {playSong(e, song)}}>play</button></li>
					)
				})
			}

		</ul>
	)
}

export default SongList;
