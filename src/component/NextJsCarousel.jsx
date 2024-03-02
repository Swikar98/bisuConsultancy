import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import First from '../image/carousel/first.jpg'
import Second from '../image/carousel/second.jpg'
import Image from 'next/image';
export default class NextJsCarousel extends Component { 
	render() { 
		return ( 
			<div  className='h-full w-full bottom-0 justify-center items-center  rounded' > 
			<Carousel infiniteLoop useKeyboardArrows autoPlay normal> 
				<div > 
					<Image 
					src={Second}
					 alt="image1" 
					 className='h-fit w-screen' /> 
			<div className=" absolute justify-center items-center text-blue-600">
				
			</div>

				</div> 
				<div> 
					<Image 
					src={First} 
					alt="image2"
					className='h-fit w-screen' 
					/> 
				

				</div> 
			
			</Carousel> 
			</div> 
		); 
	} 
};
