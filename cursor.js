if (location.hash == '#cursor' || ~document.cookie.indexOf('cursor=true')) {
	document.cookie = 'cursor=true';
	document.addEventListener('DOMContentLoaded', function() {

		var root = document.createElement('div');
		root.className = 'cursor-hilite';
		document.body.appendChild(root);

		var width, height;

		setTimeout(function retry() {
			width = root.offsetWidth;
			height = root.offsetHeight;
			if (width == 0) {
				setTimeout(retry, 100);
			}
		}, 100);

		document.body.addEventListener('mousemove', function(v) {
			root.style.left = (v.pageX - width / 2) + 'px';
			root.style.top = (v.pageY - height / 2) + 'px';
		});

		document.body.addEventListener('keypress', function(v) {
			switch(v.which) {
				case 43: // +
					changeSize(10);
					break;
				case 45: // -
					changeSize(-10);
					break;
			}
		});

		function changeSize(amount) {
			width += amount;
			height += amount;
			root.style.width = width + 'px';
			root.style.height = height + 'px';
		}

	});
}