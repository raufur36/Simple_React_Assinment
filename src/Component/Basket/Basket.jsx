// import Products from '../Products/Products';


const Basket = () => {

    return (
        <>
           <div>
           <div className="flex justify-between mt-[250px] rounded-t-2xl w-[73%] ms-10 bg-white text-black pb-5">
                <table className=" w-full">
                    <thead className="border-b-2 border-gray-200">
                        <tr className="" >
                            <th className="pr-[200px] py-5">Item</th>
                            <th className="" >Current Bid</th>
                            <th>Time Left</th>
                            <th>Bid Now</th>
                        </tr>
                    </thead>
                </table>
            </div>
           </div>
        </>

    );
};

export default Basket;