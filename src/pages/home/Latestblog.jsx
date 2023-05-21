import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Latestblog = () => {
    {
        AOS.init();
      }
    return (
        <div className='mt-5'>
            <h2 className='text-primary text-center font-bold text-5xl mb-5 rounded-xl'>Latest Blog</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto '>


                <div data-aos="flip-up" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-full h-full">
                        <img src="https://i.ibb.co/k00NMbb/mickey-et-ses-amis-figurine-plastique-donald-duck-en-moto-p-image-391972-grande.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Donald Duck</h2>
                        <p>Its a Donald Duck toy</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read Details About this !!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-full h-full">
                        <img src="https://i.ibb.co/SQ1GHYp/326c785d-cbd2-4ad3-b28c-3bcd3f77d704-c15d1fce69910b679f6df402ba1a28f2.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Micky Mouse Set</h2>
                        <p>Mickey Mouse set visit blog page to see detais</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read Details About this !!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 w-full h-full">
                        <img src="https://i.ibb.co/cF3GV0t/0-SWNS-MICKEY-MOUSE-01.jpg" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mickey Mouse</h2>
                        <p>This is mickey Mouse Car toy</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read Details About this !!</button>
                        </div>
                    </div>
                </div>




                {/* <div className=' rounded-xl bg-primary p-4'>
                    <img className='p-3 rounded-md w-full h-full' src="https://i.ibb.co/cF3GV0t/0-SWNS-MICKEY-MOUSE-01.jpg" alt="" />
                </div>
                <div className=' rounded-xl bg-primary p-4'>
                    <img className='p-3 rounded-md w-full h-full' src="https://i.ibb.co/SQ1GHYp/326c785d-cbd2-4ad3-b28c-3bcd3f77d704-c15d1fce69910b679f6df402ba1a28f2.webp" alt="" />
                </div> */}

            </div>
        </div>
    );
};

export default Latestblog;