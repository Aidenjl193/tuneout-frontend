import React from 'react'

const CarouselCard = (props) => {
	return (
		<div className="carousel-card" style={
		{
			transform: `rotateY(${props.index * 0.7854}rad) translateZ(${props.radius}px) scale(${props.viewIndex % 8 == props.index ? 1.2 : 1})`
		}}>
		<img src={`https://tune-out.herokuapp.com/${props.imgUrl}`} />
		</div>
	)
}

export default CarouselCard;
