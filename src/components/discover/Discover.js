import React from 'react';
import api from '../../Api'
import AlbumCard from '../albums/AlbumCard'

export default class Discover extends React.Component {

	state = {
		albums: []
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
	}

	searchOnChange = (e) => {
		this.search(e.target.value);
	}

	render() {
		return(
			<div>
				<input type="text" onChange={this.searchOnChange} />
				<h1>albums</h1>
				<div id="album-container">
					{
						this.state.albums.map((album, i) => {
							return <AlbumCard key={i} album={album}/>
						})
					}
				</div>
			</div>
		)
	}
}
