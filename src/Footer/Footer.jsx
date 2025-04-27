import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-white w-full text-black flex justify-center text-center '>
                <div className='my-[132px]' >
                    <h1 className='text-4xl my-3 text-blue-600' >Moto<span className=' text-yellow-400' >Doc</span></h1>
                    <div>
                        <ul className='flex justify-center gap-3 text-xl' >
                            <li>Bid.</li>
                            <li>Win.</li>
                            <li>Own.</li>
                        </ul>
                    </div>
                    <div>
                        <ul  className='flex justify-center gap-3 text-lg my-6'>
                            <li>Home</li>
                            <li>Auctions</li>
                            <li>Categories</li>
                            <li>How to works</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg' > &copy; 2025 AuctionHub. All rights reserved. </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;