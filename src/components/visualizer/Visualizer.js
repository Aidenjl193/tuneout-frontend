export default function sketch (p) {
	let fft;
	let amplitude = 60;
	
	p.setup = () => {
		p.createCanvas(300, 200);
		fft = new p5.FFT();
	}

	function drawLines() {
		var waveform = fft.waveform();
		p.strokeWeight(7);
		const nodeCount = waveform.length;
		const multiplier = p.width / nodeCount;
		waveform.forEach((amplitude, i) => {
			p.stroke(p.color(amplitude[1]));
			p.line((i + 0.5) * multiplier, p.height / 2 + amplitude[0], (i + 0.5) * multiplier, p.height / 2 - amplitude[0]);
		})
	}

	p.draw = () => {
		p.clear();
		drawLines();
	}
};

