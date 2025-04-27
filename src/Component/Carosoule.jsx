import React from 'react';
const Carosoule = () => {
    return (
        <>
            <div>
                <div className='relative' >
                    <div>
                        <img className='h-[845px] w-full' src="../assets/Banner-min.jpg" alt="" />
                    </div>
                    <div className='absolute top-[240px] left-10' >
                        <h1 className='text-5xl font-semibold mb-4' >Buy it with excitement, <br /> sell it with stories.</h1>
                        <p>Moto Buy & Sell – Find your next ride or pass it on. Fast, easy, and trusted. <br />  Every bike has a story — start yours today.</p>
                        <button className='bg-white text-black px-8 py-3 rounded-4xl mt-4' >explore Auctions</button>
                    </div>
                </div>
                <div className='ms-10 mt-10 relative top-50' >
                    <h1 className='text-4xl my-3' >Moto Doc</h1>
                    <p className='text-xl' >Discover your finding by Moto Doc extraordinary items</p>
                </div>
            </div>

        </>

    );
};

export default Carosoule;