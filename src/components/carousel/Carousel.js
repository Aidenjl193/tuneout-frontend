import React from 'react'
import './Carousel.css'
import CarouselCard from './CarouselCard'

class Carousel extends React.Component {

	state = {
		radius: 500,
		position: 0
	}

	moveToIndex = (index) => {
		this.setState({position: index});
	}

	render() {
		return (
			<div className="carousel-container">
				<div className="carousel"
					 style={{
						 transform: `perspective(1100px) translateZ(-${this.state.radius}px) rotateY(-${this.props.songIndex * 0.7854}rad)`
					 }}
				>
					<CarouselCard index={0} radius={this.state.radius} imgUrl={this.props.urls[0]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={1} radius={this.state.radius} imgUrl={this.props.urls[1]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={2} radius={this.state.radius} imgUrl={this.props.urls[2]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={3} radius={this.state.radius} imgUrl={this.props.urls[3]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={4} radius={this.state.radius} imgUrl={this.props.urls[4]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={5} radius={this.state.radius} imgUrl={this.props.urls[5]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={6} radius={this.state.radius} imgUrl={this.props.urls[6]} viewIndex={this.props.songIndex}/>
					<CarouselCard index={7} radius={this.state.radius} imgUrl={this.props.urls[7]} viewIndex={this.props.songIndex}/>
				</div>
			</div>
		)
	}
}

export default Carousel;
