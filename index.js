var startX;
var startY;
var moveX;
var moveY;

function load() {

	document.addEventListener('touchstart', touchstart, false);
	document.addEventListener('touchmove', touchmove, false);
	document.addEventListener('touchend', touchend, false);

	function touchstart(e) {
		startX = e.changedTouches[0].clientX;
		startY = e.changedTouches[0].clientY;
		document.getElementById("writeX").textContent = "未改变";
		document.getElementById("writeY").textContent = "未改变";
		console.log(startX);
		console.log(startY);
	}

	function touchmove(e) {
		if (startX != e.changedTouches[0].clientX) {
			document.getElementById("writeX").textContent = "移动中";
		}
		if (startY != e.changedTouches[0].clientY) {
			document.getElementById("writeY").textContent = "移动中";
		}
	}

	function touchend(e) {
		console.log(e.changedTouches[0].clientX);
		console.log(e.changedTouches[0].clientY);
		if (startX - e.changedTouches[0].clientX < 0) {
			document.getElementById("writeX").textContent = "向下移";
			console.log("向下移");
		} else if (startX - e.changedTouches[0].clientX > 0) {
			document.getElementById("writeX").textContent = "向上移";
			console.log("向上移");
		} else {
			document.getElementById("writeX").textContent = "未改变";
			console.log("未改变");
		}

		if (startY - e.changedTouches[0].clientY < 0) {
			document.getElementById("writeY").textContent = "向左移";
			console.log("向左移");
		} else if (startY - e.changedTouches[0].clientY > 0) {
			document.getElementById("writeY").textContent = "向右移";
			console.log("向右移");
		} else {
			document.getElementById("writeY").textContent = "未改变";
			console.log("未改变");
		}

	}
}
window.addEventListener('load', load, false);
