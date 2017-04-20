

(function() {
 
	// access circles
	var circles = document.getElementsByClassName('circles'),
		circle1 = document.getElementById('circle1'),
		circle2 = document.getElementById('circle2'),
		circle3 = document.getElementById('circle3'),
		circle4 = document.getElementById('circle4');

	var circleList = [circle1, circle2, circle3, circle4];

	function moveCircle(list) {
		// add click event to circles
		list.forEach(function(item) {
			item.addEventListener('click', move);

			// move circles 
			function move() {
				if(item.style.marginLeft == '200px') {
					item.style.marginLeft = '400px';
				} else {
					item.style.marginLeft = '200px';
				}
			}
		});	
		
	}

	moveCircle(circleList);




})();