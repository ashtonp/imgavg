<?php

//load jpg image into memory
$src = imagecreatefromJPEG('your_image_name.ext');

// initalize avg with color at pixel (0,0)
$avg = imagecolorat($src,0,0);

//traverse through entire image
for ($x = 0; $x < imagesx($src); $x++)
{
    for ($y = 0; $y < imagesy($src); $y++)
  {
		//get the index value of the image at the pixel location	
		$pixel_color = imagecolorat($src,$x,$y);
		
		//calculate running average
		$avg = ($avg + $pixel_color);
		$avg = $avg / 2; 
	}
}

//accomodate for decimal places when converting to rgb
$avg = round($avg, 0);

//convert to rgb
$r = ($avg >> 16) & 0xFF;
$g = ($avg >> 8) & 0xFF;
$b = $avg & 0xFF;

//output colors in rgb
echo "R:".$r."<br />";
echo "G:".$g."<br />";
echo "B:".$b."<br />";
?>

