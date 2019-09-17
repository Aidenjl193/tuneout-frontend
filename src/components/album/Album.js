import React from 'react'
import api from '../../Api'
import SongList from '../songs/SongList'

export default class Album extends React.Component {

	state = {
		album: {
			songs: [],
			account: {
				account_name: ""
			}
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
				<div id="album-image">
					<img src={`https://tune-out.herokuapp.com/${this.state.album.cover_art}`} />
				</div>
				<h1>{`${this.state.album.name} - ${this.state.album.account.account_name}`}</h1>
				<button onClick={this.deleteAlbum}>Delete Album</button>
				<SongList songs={this.state.album.songs} albumName={this.state.album.name} addSongToQueue={this.props.addSongToQueue} />
			</div>
		)
	}

}
