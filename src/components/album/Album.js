import React from 'react'
import api from '../../Api'
import SongList from '../songs/SongList'

export default class Album extends React.Component {

	state = {
		album: {
			songs: []
		}
	}

	componentDidMount() {
		fetch(`${api.albums}${this.props.match.params.id}`, {
			headers: {
				"Authorization": localStorage.getItem('jwt')
			}
		})
			.then(resp => resp.json())
			.then(data => {
				this.setState({album: data});
			});
	}

	deleteAlbum = () => {
		fetch(`${api.albums}${this.props.match.params.id}`, {
			method: "DELETE",
			headers: {
				"Authorization": localStorage.getItem('jwt')
			}
		})
			.then(resp => resp.json())
			.then(data => {
			});
	}

	render() {
		return (
			<div>
				<button onClick={this.deleteAlbum}>Delete Album</button>
				<SongList songs={this.state.album.songs} setCurrentSong={this.props.setCurrentSong} />
			</div>
		)
	}

}
