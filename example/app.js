import focusView from 'ti.focusView';

const ldi = Ti.Platform.displayCaps.logicalDensityFactor;
const pw = Ti.Platform.displayCaps.platformWidth / ldi;
const ph = Ti.Platform.displayCaps.platformHeight / ldi;

const win = Ti.UI.createWindow({
	backgroundColor: "#fff"
});
const btn1 = Ti.UI.createButton({
	title: "highlight me",
	top: 10,
	width: 200,
	borderRadius: 0
})
const btn2 = Ti.UI.createButton({
	title: "circle",
	top: 50,
	width: 200,
	borderRadius: 0
})
let focusLayer = Ti.UI.createView({
	touchEnabled:false
});
let view;

const lbl = Ti.UI.createLabel({
	text: "focus view",
	color: "#fff"
})
win.add([btn1, btn2, focusLayer, lbl]);
win.open();

btn1.addEventListener("click", function() {
	focusLayer.removeAllChildren();
	view = focusView.createView({
		top: 0,
		left: pw * 0.5 - 50,
		width: 100,
		height: 340,
		borderRadius: 0,
		opacity: 0
	});
	focusLayer.add(view);
	view.animateBox({
		top: 0,
		left: pw * 0.5 - 155,
		width: 310,
		height: 100,
		opacity: 0.75,
		duration: 1000,
		borderRadius: 20
	})
})

btn2.addEventListener("click", function() {
	focusLayer.removeAllChildren();

	view = focusView.createView({
		top: ph * 0.5,
		left: 0,
		radius: 100,
		opacity: 0.0
	});
	focusLayer.add(view);
	view.animateBox({
		opacity: 0.5,
		duration: 500
	})

	setTimeout(function() {
		view.animateBox({
			top: ph * 0.5,
			left: pw,
			radius: 50,
			opacity: 0.95,
			duration: 1000
		})
		setTimeout(function() {
			view.animateBox({
				top: 50,
				left: pw * 0.5,
				radius: 100,
				opacity: 0.5,
				duration: 1000
			})
		}, 900);
	}, 400);
})
