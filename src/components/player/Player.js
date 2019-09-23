import React from 'react'
import './Player.css'

class Player extends React.Component {
	state = {
		song: {
			duration: 0,
			currentTime: 0
		},
		playing: false
	}
	
	constructor(props) {
		super(props);
		this.playerRef = React.createRef();
	}

	componentDidMount() {
		this.playerRef.current.oncanplay = () => {
			const song = {...this.state.song}
			song.duration = this.playerRef.current.duration;
			this.setState({song: song});
		};

		this.playerRef.current.ontimeupdate = () => {
			const song = {...this.state.song}
			song.currentTime = this.playerRef.current.currentTime;
			this.setState({song: song});
		}
	}

	getFormattedTimeFromSeconds = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time - minutes * 60);
		return `${minutes}:${seconds < 10 ? 0 : ""}${seconds}`
	}

	togglePlay = () => {
		if(this.state.playing) {
			this.playerRef.current.pause();
		} else {
			this.playerRef.current.play();
		}
		this.setState({playing: !this.state.playing});
	}

	setTime = (e) => {
		this.playerRef.current.currentTime = this.state.song.duration * (e.nativeEvent.offsetX / e.currentTarget.offsetWidth);
	}
	
	render() {
		return (
			<div>
				<div id="player-bar">
					<div id="progress-container" onClick={this.setTime}>
						<div id="progress-background"/>
						<div id="progress-bar" style={
						{
							width: `${100 * this.state.song.currentTime / this.state.song.duration}%`
						}
						}/>
					</div>
					<table>
						<tr>
							<td>
								<img id="album-image" src={
								this.props.currentSong ? `https://tune-out.herokuapp.com/${this.props.currentSong.album.cover_art}` : ""
								}/>
								<div id="song-details">
									<h3>
										{
											this.props.currentSong ? this.props.currentSong.name : ""
										}
									</h3>
									<br/>
									<p>
										{
											this.props.currentSong ? this.props.currentSong.album.name : ""
										}
									</p>
								</div>
							</td>
							<td>
								<div id="player-controls">
									<button onClick={this.togglePlay}>{this.state.playing ? "❚❚" : "►"}</button>
								</div>
							</td>
							<td>
							</td>
						</tr>
					</table>
				</div>
				<audio
				controls src={this.props.currentSong ? `https://tune-out.herokuapp.com/${this.props.currentSong.song_url}` : ""}
				onEnded={this.props.nextSong}
				ref={this.playerRef}
				/>
			</div>
		)
	}
}

export default Player;
