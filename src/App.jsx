import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Basket from './Component/Basket/Basket'
import Carosoule from './Component/Carosoule'
import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import { IoIosHeartEmpty } from "react-icons/io";
import Footer from './Footer/Footer'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("🦄 Wow, so easy!");
  const [AddData, setAddItems] = useState([]);
  // console.log(AddData)
  const AddToCart = (item) => {
    setAddItems([...AddData, item]);
    console.log(AddData)
  }

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('Products.json')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);


  return (
    <>
      <Navbar></Navbar>
      <Carosoule></Carosoule>
      <Basket></Basket>
      <Suspense fallback={<h1>Loading...</h1>} >
        <div>
          {
            items.map(item => <Products key={item.id} item={item} AddToCart={AddToCart} notify={notify} Products={Products}  ></Products>)
          }
        </div>

      </Suspense>
      {/* <Cart></Cart> */}
      <div className='h-[360px] rounded-2xl bg-white text-black  text-center w-[22%] relative bottom-[775px] left-[1470px]' >
        <div className='border-b-2 border-gray-200 py-3 flex justify-center items-center gap-4' >
          <button> <IoIosHeartEmpty size={30} /></button>
          <h1 className='text-3xl font-semibold' >Favorite Items</h1>

        </div>
        <div>

        </div>
        <div className='mt-[10px] border-b-2 border-gray-200 py-10 ' >
          <div>
            {AddData.length > 0 ? (AddData.map((product, index) => (<h1 key={index}>{product.product_name}</h1>)) ) : (<h1>Not yet favorite</h1>)}
          </div>

          <p className='text-lg text-gray-400 mt-6' >Click the heart icon on any item <br /> to add it to your favorites</p>
        </div>
        <div className='flex items-center justify-between mx-10 py-10' >
          <div className='' >
            <h1 className='text-2xl' >Total bids Amount</h1>
          </div>
          <div>
            <h1 className='text-2xl' >$0000</h1>
          </div>
        </div>
      </div>
      <div style={{ padding: '50px' }}>
        <ToastContainer />
      </div>

      <Footer></Footer>

    </>
  )
}

export default App
