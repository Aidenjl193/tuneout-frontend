import React from 'react'
import './Player.css'

export default props =>
	<audio
controls src={props.currentSong ? `https://tuneout.netlify.com/${props.currentSong.song_url}` : ""}
onEnded={props.nextSong}
ref={props.setPlayerRef}
/>
