var d = document;
var entryField = d.getElementById('newEntry');

d.getElementById('entry').onsubmit = addNewEntry;

function addNewEntry(){
	var entryValue = convertCurrency( parseFloat(entryField.value, 10) );
	var entryRow = '<tr><td></td><td>' + entryValue + '</td></tr>'

	d.getElementById('entries').innerHTML += entryRow;
	
	clearInput();
	return false;
}
function convertCurrency(entryValue){
	return '£' + entryValue.toFixed(2);
}
var clearInput = function(){
	entryField.value = '';
}