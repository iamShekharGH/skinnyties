

var collectio = document.getElementById('collection');
var collectionddow = document.getElementsByClassName('collectionddown');
var container = document.getElementsByClassName('container');

// container[0].addEventListener("click" ,function(event){
// 	console.log(event);
// 	collectionddow[0].style.display = 'none';

// });

collectio.addEventListener("click" ,function(event){
	// collectionddow.style+="display=flex;";
	collectionddow[0].style.display = collectionddow[0].style.display === 'none' ? '' : 'none';
	

	//document.getElementsByClassName('collectionddown')[0].style.display = "flex" ;
	console.log(collectionddow[0].style);
	//collectionddow.style = "display: flex;";
	//this.style = "background-color:red;";
	
	


});



console.log(container[0]);
console.log("This is active")