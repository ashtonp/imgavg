function imgavg(id_name) {
	var img = new Image();

	img.src = id_name;

	img.onload = function()
	{
		// Create an empty canvas element
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		
		// virtually draw a canvas the same dimensions as the image
		canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
		
		// get the contents of the canvas from the first pixel 
		var pixelData = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
		
		//get the color of the very first pixel
		var rAvg = pixelData[0];
		var gAvg = pixelData[1];
		var bAvg = pixelData[2];
		
		// traverse through the entire image pixel by pixel
		for (var x = 0; x < img.width; x++)
		{
			for (var y = 0; y < img.height; y++)
			{
				// get the image data a corresponding pixel
				pixelData = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
				
				// calculate the averages
				rAvg = (rAvg + pixelData[0]) / 2;
				gAvg = (gAvg + pixelData[1]) / 2;
				bAvg = (bAvg + pixelData[2]) / 2;
			} 
		}
	
		//output the color codes and the image to screen
		document.write('R:'+rAvg+' G:'+ gAvg+' B:'+ bAvg+'<br />');
		document.write('<img src="'+img.src+'">');
	}	
}
