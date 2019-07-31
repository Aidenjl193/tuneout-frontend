import React from 'react'
import './Player.css'

export default class Player extends React.Component {
	render() {
		return (
			<audio
				controls src={this.props.currentSong ? `http://localhost:3000${this.props.currentSong.song_url}` : ""}
				onEnded={this.props.nextSong}>
			</audio>
		)
	}
}
