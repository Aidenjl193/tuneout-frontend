import React from 'react'
import P5Wrapper from 'react-p5-wrapper';
import Sketch from './LogoSketch'

export default class Logo extends React.Component {
	render() {
		return (
			<P5Wrapper sketch={Sketch} />
		)
	}
}
