import React from 'react'
import './Player.css'

export default class Player extends React.Component {
	render() {
		return (
			<audio controls src={this.props.currentSong.url}>
			</audio>
		)
	}
}
