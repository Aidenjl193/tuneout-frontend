import React from 'react'
import api from '../../Api'
import './ProfilePage.css'
import AlbumForm from '../album/AlbumForm'

import AlbumCard from '../albums/AlbumCard'

export default class ProfilePage extends React.Component {

	state = {
		showForm: false,
		account: {
			account_name: "",
			albums: []
		}
	}

	componentDidMount() {
		fetch(`${api.accounts}${this.props.match.params.id}`, {
			headers: {
				"Authorization": localStorage.getItem('jwt')
			}
		})
			.then(resp => resp.json())
			.then(data => {
				this.setState({account: data});
			});
	}

	toggleAlbumForm = () => {
		this.setState({ showForm: !this.state.showForm })
	}

	addNewAlbum = (album) => {
		let account = {...this.state.account}
		account.albums.push(album);
		this.setState({account: account})
	}

	render() {
		return (
			<div>
				{
					this.state.showForm ? <AlbumForm
											  account_id={this.state.account.id}
					toggleAlbumForm={this.toggleAlbumForm}
					addNewAlbum={this.addNewAlbum}
					/> : <div />
				}
				<div id="profile-header">
					<img id="profile-picture" />
					<h2>{this.state.account.account_name}</h2>
					<button onClick={this.toggleAlbumForm}>New Album</button>
				</div>
				<div id="album-container">
					{
						this.state.account.albums.map((album, i) => {
							return <AlbumCard key={i} album={album}/>
						})
					}
				</div>
			</div>
		)
	}
}
