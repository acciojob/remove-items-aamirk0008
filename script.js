//your JS code here. If required.
let colorSelect = document.getElementById('colorSelect')
let remove = document.querySelector('input[type="button"]')

remove.addEventListener('click', ()=> {
	const selectedIndex = colorSelect.selectedIndex;
	if (selectedIndex !== -1) {
		colorSelect.remove(selectedIndex)
	}
})