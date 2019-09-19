import React from 'react';
import api from '../../Api'
import AlbumCard from '../albums/AlbumCard'
import SongList from '../songs/SongList'

export default class Discover extends React.Component {

	state = {
		albums: [],
		songs: []
	}

	componentDidMount() {
		this.search("");
	}

	search = (searchTerm) => {
		fetch(`${api.albums}?filter=${searchTerm}`)
			.then(resp => resp.json())
			.then((data) => {
				this.setState({albums: data})
			})
		
		fetch(`${api.songs}?filter=${searchTerm}`)
			.then(resp => resp.json())
			.then((data) => {
				this.setState({songs: data})
			})
	}

	searchOnChange = (e) => {
		this.search(e.target.value);
	}

	render() {
		return(
			<div>
				<input type="text" onChange={this.searchOnChange} placeholder="search" />
				<h1>ALBUMS</h1>
				<div id="album-container">
					{
						this.state.albums.map((album, i) => {
							return <AlbumCard key={i} album={album}/>
						})
					}
				</div>
				<h1>SONGS</h1>
				<SongList songs={this.state.songs} addSongToQueue={this.props.addSongToQueue}/>
			</div>
		)
	}
}
