import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { cartData } from "../data/dummy";
import { Button } from ".";
import { useStateContext } from "../contexts/ContextProvider";
const Cart = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="z-10 bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 p-8">
        <div className="flex justify-between items-center  ml-4">
          <p className="font-semibold text-xl dark:text-gray-200">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsClicked(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img
                  className="rounded-lg h-80 w-24"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <p className="font-semibold capitalize">{item.name}</p>
                  <p>{item.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        0
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            customFunc={() => setIsClicked(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
