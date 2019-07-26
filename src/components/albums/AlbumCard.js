import React from 'react';
import { Link } from "react-router-dom";
import './Albums.css'

const AlbumCard = (props) => {
	const { album } = props;
	return (
		<Link to={`/albums/${album.id}`}>
			<div className="album-card">
				<h3>{ album.name }</h3>
			</div>
		</Link>
	)
}

export default AlbumCard;
