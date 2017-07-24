function check_pass() {
	if (document.getElementById('p1').value == document.getElementById('p2').value) {
		document.getElementById('submit').disabled = false;
		document.getElementById('message').style.color = 'green';
		document.getElementById('message').innerHTML = 'Matching';
	} else {
		document.getElementById('submit').disabled = true;
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Not Matching';
		window.alert('Entered Password is Not matching with above password ');

	}
}