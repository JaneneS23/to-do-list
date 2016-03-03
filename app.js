var itemList = [];

function addToItem() {
	// grabs what the user types into input field.
	var addItem = document.getElementById("addItem").value;
	// reusess whatever the use types in and its pushing that into our
	itemList.push(addItem);

	// loops through an array and stores whatever the user inputted into variable item
	for (var i = 0; i < itemList.length; i++) {
		var newItem = " <button><a href='#'> onCLick=removeItem(" + i +"); '>X</a></button>" + itemList[i] + "<br>";
	};

	document.getElementById("items").innerHTML += newItem;
}
	// for (var i = 0; i < mylist.length; i++) {
	// 	var newItem = ""
	// }
function removeItem(i) {
	itemList.splice(i, 1);

	var newItem = "";

	for (var i = 0; i < itemList.length; i++) {
		newItem += itemList[i] + "<button><a href='#'> onCLick=removeItem(" + i +"); '>X</a></button>" + itemList[i] + "<br>";
	}

	document.getElementById("items").innerHTML = newItem;
}