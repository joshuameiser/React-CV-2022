const DisableScrolling = (variable: boolean) => {
	if (variable) {
		document.body.style.overflowY = "hidden";
		document.ontouchmove = function (e) {
			//because ofverflow hidden isn't working for iOS devices
			e.preventDefault();
		};
	} else {
		document.body.style.overflowY = "auto";
		document.ontouchmove = function (e) {
			//to re-enable scrolling for iOS devices
			return true;
		};
	}
};

export default DisableScrolling;
