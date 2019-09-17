import React from 'react';
import { Link } from "react-router-dom";
import './Albums.css'

const AlbumCard = (props) => {
	const { album } = props;
	return (
		<Link to={`/albums/${album.id}`}>
			<div className="album-card">
				<div className="disk">
					<div className="inner-disk" />
				</div>
				<div className="album-card-front">
					<div className="album-cutout">
						<div className="disk">
							<div className="inner-disk" />
						</div>
					</div>
					<img src={`https://tune-out.herokuapp.com/${album.cover_art}`} />
				</div>
			</div>
		</Link>
	)
}

export default AlbumCard;
