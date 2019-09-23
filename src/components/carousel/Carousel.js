import React from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard'

class Carousel extends React.Component {

	state = {
		radius: 500,
	}

	render() {
		const { songIndex } = this.props;
		const frontCard = (8 - songIndex) % 8;
		const rotation = songIndex % 8;
		return (
			<div className="carousel-container">
				<div className="carousel"
					style={{
						transform: `perspective(1100px) translateZ(-${this.state.radius}px) rotateY(-${songIndex * 0.7854}rad)`
					}}
				>
					<CarouselCard index={0} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex)) % 8 - 4 >= 0 ? -(songIndex % 8) : ((8 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex)) % 8 - 4 >= 0 ? -(songIndex % 8) : ((8 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={1} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 1) ) % 8 - 4 >= 0 ? -((songIndex - 1) % 8) : ((1 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 1) ) % 8 - 4 >= 0 ? -((songIndex - 1) % 8) : ((1 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={2} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 2) ) % 8 - 4 >= 0 ? -((songIndex - 2) % 8) : ((2 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 2) ) % 8 - 4 >= 0 ? -((songIndex - 2) % 8) : ((2 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={3} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 3) ) % 8 - 4 >= 0 ?  -((songIndex - 3) % 8) : ((3 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 3) ) % 8 - 4 >= 0 ?  -((songIndex - 3) % 8) : ((3 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={4} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 4) ) % 8 - 4 >= 0 ?  -((songIndex - 4) % 8) : ((4 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 4) ) % 8 - 4 >= 0 ?  -((songIndex - 4) % 8) : ((4 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={5} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 5) ) % 8 - 4 >= 0 ?  -((songIndex - 5) % 8) : ((5 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 5) ) % 8 - 4 >= 0 ?  -((songIndex - 5) % 8) : ((5 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={6} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 6) ) % 8 - 4 >= 0 ?  -((songIndex - 6) % 8) : ((6 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 6) ) % 8 - 4 >= 0 ?  -((songIndex - 6) % 8) : ((6 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
					<CarouselCard index={7} radius={this.state.radius} imgUrl={
					this.props.songQueue[songIndex + ((8 - (songIndex + 7) ) % 8 - 4 >= 0 ?  -((songIndex - 7) % 8) : ((7 - songIndex) % 8)) ] ?
					this.props.songQueue[songIndex + ((8 - (songIndex + 7) ) % 8 - 4 >= 0 ?  -((songIndex - 7) % 8) : ((7 - songIndex) % 8)) ].album.cover_art
					: ""
					} viewIndex={songIndex}/>
				</div>
			</div>
		)
	}
}

						export default Carousel;
