import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
const Products = ({ item, AddToCart, notify }) => {
    // console.log(item)
    return (


        <>
            <div className='flex relative bg-white w-[73%] justify-between gap-6 ms-10 mr-10  border-b-2 border-gray-200' >
                <div className='' >
                    <table className="flex ">
                        <tbody className="flex">
                            <tr className="flex gap-10 text-black ">
                                <td className="flex gap-10 justify-center items-center">
                                    <img className="w-30 my-2 h-20 pl-5" src={item.img} alt="" />
                                    <h1 className='w-[530px]' >{item.product_name}</h1>
                                </td>
                                <td className='flex justify-center items-center w-[200px] ' >{item.product_price}</td>
                                <td className='flex justify-center items-center w-[220px] text-center ' >{item.time_left}</td>
                                <td className=' flex justify-center items-center w-[100px]' >
                                    <button onClick={() => { AddToCart(item); notify(); }}><IoIosHeartEmpty size={24} /></button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>


    );
};

export default Products;
