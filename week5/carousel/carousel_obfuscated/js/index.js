$(function(){
//food1', 'food2', 'food3', 'food4', 'food5', 'food6', 'food7', 'food8'

	//console.log(myArr[0]); //prints food1
	//console.log(myArr[1]); //prints food2
	//console.log(myArr[2]); //prints food3
	//console.log(myArr[3]); //prints food4
//you will need:
	// an array of images
	//$('button').on('click', function(){}

	//manipulate the image src with attr()

	//BONUS:

	//score each image on select input change()
	//a way of scoring each image
//add the score to the page with append()

	var images = ['food1', 'food2', 'food3', 'food4', 'food5', 'food6', 'food7', 'food8'];
	var total = images.length;
	//var myArray = [ 0,1,2, 3, 4, 5,6, 7];
	
	//console.log(myArray.length, total = images.length);
	

	var imagePath = 'images/';
	var index = 1;

	

	$('.btn-skip').on('click', function(){

		if (index < total){	
			index++;
			$('#image-to-vote-on').attr('src', imagePath + 'food' + index + '.jpg')
		}
	});


	$('.btn-back').on('click', function(){
		if (index > total){	
			index--;
			$('#image-to-vote-on').attr('src', imagePath + 'food' + index + '.jpg')
		}
		//index--;
		$('#image-to-vote-on').attr('src', imagePath + 'food' + index + '.jpg')
	});
	

});