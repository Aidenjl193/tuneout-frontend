import React from 'react';
import api from '../../Api'

export default class AlbumForm extends React.Component {
	state = {
		albumState: new FormData(),
		songForm: {
			name: "",
			file: null
		}
	}

	onAlbumFormChange = (e) => {
		let albumState = this.state.albumState;
		albumState.set("album[account_id]", this.props.account_id);
		albumState.set(`album[${e.target.name}]`, e.target.value);
		this.setState({albumState: albumState});
	}

	submit = (e) => {
		e.preventDefault();
		const body = this.state.albumState;
		fetch(api.albums, {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem('jwt')
			},
			body: body
		})
			.then(resp => resp.json())
			.then(data => {
				this.props.toggleAlbumForm();
				this.props.addNewAlbum(data);
			})
	}

	setSong = (e) => {
		let songState = { ...this.state.songForm };
		songState.file = e.target.files[0];
		this.setState({songForm: songState});
	}

	onSongFormChange = (e) => {
		let songState = { ...this.state.songForm };
		songState[e.target.name] = e.target.value;
		this.setState({songForm: songState});
	}

	addSong = (e) => {
		e.preventDefault();
		let albumState = this.state.albumState;
		albumState.append("album[songs][]", this.state.songForm.file, this.state.songForm.name);
		this.setState({ albumState: albumState });
	}

	addCover = (e) => {
		let albumState = this.state.albumState;
		albumState.set(`album[cover]`, e.target.files[0]);
		this.setState({albumState: albumState});
	}
	
	render() {
		return (
			<div id="album-form">
				<div className="form-card">
					<form onSubmit={this.submit}>
						<label name="name">NAME</label>
						<input type="text" name="name" onChange={this.onAlbumFormChange}/>
						<label name="cover">COVER ART</label>
						<input
						type="file"
						name="cover"
						accept="image/*"
						onChange={this.addCover}
						/>
						<button type="submit">RELEASE ALBUM</button>
					</form>
					<ul>
						{
							this.state.albumState.getAll("album[songs][]").map((song) => {
								return <li>{song[1]}</li>;
							})
						}
					</ul>
					<form id="song-form">
						<label name="song_name">ADD SONG</label>
						<input type="text" name="name" onChange={this.onSongFormChange} />
						<input
						type="file"
						name="file"
						accept="audio/*"
						onChange={this.setSong}
						/>
						<button onClick={this.addSong}>ADD SONG</button>
					</form>
					<button onClick={this.props.toggleAlbumForm}>go back</button>
				</div>
			</div>
		)
	}
}
