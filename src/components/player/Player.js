import React from 'react'
import './Player.css'

export default props =>
	<audio
controls src={props.currentSong ? `http://localhost:3000${props.currentSong.song_url}` : ""}
onEnded={props.nextSong}
ref={props.setPlayerRef}
/>
