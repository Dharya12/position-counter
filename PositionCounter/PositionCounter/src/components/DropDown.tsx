import React, { useState } from "react";
import { DropDownProps, IFruit } from "../Types/fruit";
import FruitsSiblinsDropDown from "./FruitsSiblinsDropDown";

export default function DropDown({
  reference,
  setDropDown,
  isOpen,
  data,
  handleCheckbox,
  selectedFruits,
}: DropDownProps) {
  const [openSiblings, setOpenSiblings] = useState<{ [key: string]: boolean }>(
    {}
  );
  const toggleSiblings = (fruitName: string) => {
    setOpenSiblings((prev) => {
      const newState = { ...prev, [fruitName]: !prev[fruitName] };
      Object.keys(newState).forEach((key) => {
        if (key !== fruitName) {
          newState[key] = false;
        }
      });
      return newState;
    });
  };
  return (
    <div className="relative">
      <div className="relative" ref={reference}>
        <button
          className="relative button flex justify-center items-center"
          onClick={() => setDropDown(!isOpen)}
        >
          <p>Select Fruits</p>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
        </button>
        {isOpen && (
          <FruitsSiblinsDropDown
            data={data}
            handleCheckbox={handleCheckbox}
            selectedFruits={selectedFruits}
            toggleSiblings={toggleSiblings}
            openSiblings={openSiblings}
          />
        )}
      </div>
      {Object.keys(openSiblings).map(
        (parentId) =>
          openSiblings[parentId] && (
            <div
              key={parentId}
              className="absolute bg-white border rounded-xl mt-2 ml-[240px] min-w-[200px] p-2 z-50"
            >
              {data
                .filter((item) => item?.parentId === parentId)
                .map((child: IFruit) => (
                  <div
                    key={child.fruitName}
                    className="flex flex-row items-center gap-4 ml-2 mb-1 cursor-pointer"
                    onClick={() => {
                      handleCheckbox(child.fruitName);
                    }}
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      checked={selectedFruits?.includes(child.fruitName)}
                    />
                    <p>{child.fruitName}</p>
                  </div>
                ))}
            </div>
          )
      )}
    </div>
  );
}
