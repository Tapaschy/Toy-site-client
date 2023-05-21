import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-5 m-8 md:m-0'>
            <h2 className='text-primary text-center font-bold text-5xl mb-5 rounded-xl'>Gallery</h2>
            <div className='grid md:grid-cols-4  grid-cols-1 gap-4 container mx-auto '>
                <div className=' md:p-3 w-full h-full rounded-md bg-primary p-4'>
                    <img className='p-3' src="https://i.ibb.co/k00NMbb/mickey-et-ses-amis-figurine-plastique-donald-duck-en-moto-p-image-391972-grande.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/cF3GV0t/0-SWNS-MICKEY-MOUSE-01.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/SQ1GHYp/326c785d-cbd2-4ad3-b28c-3bcd3f77d704-c15d1fce69910b679f6df402ba1a28f2.webp" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/zmfB79b/m-61e9a35a2e8e44795d95e709.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/80QZhVZ/Disney-Store-Japan-Goofy2020-18.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/wQCC0WW/mickey-and-friends-pull-ring-plastic-toy-donald-duck-in-boat-tricky-rider-tm-p-image-391962-grande.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/mNNNjTH/photo-1528066588405-9e20509b9e34.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                <img className='md:p-3 rounded-md w-full h-full' src="https://i.ibb.co/80QZhVZ/Disney-Store-Japan-Goofy2020-18.jpg" alt="" />
                </div>

               
                
                
                
                
            </div>
        </div>
    );
};

export default Gallery;