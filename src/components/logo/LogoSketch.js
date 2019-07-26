export default function sketch (p) {
	let amplitudes = [
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"],
		[0, "#c51574"]
	];
	
	let amplitude = 60;

	let theta = 0.0;

	const phases = [ //phase 0 is amplitude, phase 1 is speed
		[5, 0.3], //Bass
		[3, 0.5], //Mids
		[1, 0.7] //treble
	]

	p.setup = () => {
		p.createCanvas(300, 200);
	}

	function calculateAmplitudes() {
		theta += 0.1;
		let x = theta;
		
		for (let i = 0; i < amplitudes.length; ++i) {
			let wave = 0;
			phases.forEach(phase => {
				wave += p.noise(x * phase[1]) *  phase[0];
			});
			amplitudes[i][0] = wave / amplitudes.length * amplitude;
			x += 0.5;
		}
	}

	function drawLines() {
		p.strokeWeight(7);
		const nodeCount = amplitudes.length;
		const multiplier = p.width / nodeCount;
		amplitudes.forEach((amplitude, i) => {
			p.stroke(p.color(amplitude[1]));
			p.line((i + 0.5) * multiplier, p.height / 2 + amplitude[0], (i + 0.5) * multiplier, p.height / 2 - amplitude[0]);
		})
	}

	p.draw = () => {
		p.clear();
		calculateAmplitudes();
		drawLines();
	}
};

