import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from "../components";
const Chat = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="z-10 absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between ">
        <p className="font-semibold text-xl dark:text-gray-200">Messages</p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>

      {chatData.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-10"
              />
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        );
      })}
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
  );
};

export default Chat;
