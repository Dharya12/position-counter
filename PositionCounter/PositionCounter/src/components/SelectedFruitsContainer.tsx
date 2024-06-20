import React, { useState, useEffect, useRef } from "react";
import { FruitsData } from "../constant/fruitData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DropDown from "./DropDown";

const SelectBox = () => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedFruitsOrder, setSelectedFruitsOrder] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedFruitsOrder(selectedFruits);
  }, [selectedFruits]);
  useEffect(() => {
    setDropdownOpen(false);
  }, []);

  const handleCheckboxChange = (fruitName: string) => {
    setSelectedFruits((prevSelectedFruits) => {
      if (prevSelectedFruits.includes(fruitName)) {
        return prevSelectedFruits.filter((name) => name !== fruitName);
      } else {
        const newSelectedFruits = [...prevSelectedFruits];
        const fruit = FruitsData.find((fruit) => fruit.fruitName === fruitName);
        if (fruit && fruit.parentId) {
          const parentIndex = newSelectedFruits.indexOf(fruit.parentId);
          if (parentIndex !== -1) {
            newSelectedFruits.splice(parentIndex + 1, 0, fruitName);
          } else {
            newSelectedFruits.push(fruitName);
          }
        } else {
          newSelectedFruits.push(fruitName);
        }
        return newSelectedFruits;
      }
    });
  };

  const handleSubmit = () => {
    console.log("Selected indexes:", selectedFruitsOrder);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedFruits = Array.from(selectedFruitsOrder);
    const [removed] = reorderedFruits.splice(result.source.index, 1);
    const draggedFruit = FruitsData.find(
      (fruit) => fruit.fruitName === removed
    );
    if (draggedFruit && draggedFruit.parentId) {
      const parentIndex = reorderedFruits.indexOf(draggedFruit.parentId);
      const dropIndex = result.destination.index;
      if (
        dropIndex === parentIndex - 1 ||
        dropIndex === parentIndex ||
        dropIndex === parentIndex + 1
        // || dropIndex === parentIndex + 2
      ) {
        reorderedFruits.splice(result.destination.index, 0, removed);
      } else {
        reorderedFruits.splice(result.source.index, 0, removed);
      }
    } else {
      reorderedFruits.splice(result.destination.index, 0, removed);
    }

    setSelectedFruitsOrder(reorderedFruits);
    setSelectedFruits(reorderedFruits);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full flex flex-wrap mt-4 relative">
        <div className="w-full flex flex-wrap items-center gap-6 justify-between relative">
          <DropDown
            reference={dropdownRef}
            setDropDown={setDropdownOpen}
            isOpen={dropdownOpen}
            data={FruitsData}
            handleCheckbox={handleCheckboxChange}
            selectedFruits={selectedFruits}
          />
          <button className="button hover:bg-blue-600" onClick={handleSubmit}>
            Check Positions
          </button>
        </div>
        <div className="flex justify-center w-full h-[76vh] mt-8">
          <div className="flex flex-col p-4 overflow-y-scroll bg-gray-200 border rounded-xl">
            <h3 className="font-semibold mb-2">Selected Fruits:</h3>
            <Droppable droppableId="selectedFruitsList">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="grid gap-2"
                >
                  {selectedFruitsOrder.length !== 0 ? (
                    selectedFruitsOrder.map((fruit, index) => (
                      <Draggable key={fruit} draggableId={fruit} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex flex-col gap-2 border rounded-xl mb-2 bg-white p-4 w-[300px]"
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="cursor-pointer"
                                checked={selectedFruits?.includes(fruit)}
                                onChange={() => {
                                  handleCheckboxChange(fruit);
                                }}
                              />
                              <div className="avatar flex items-center justify-center">
                                <p className="text-lg font-bold text-gray-600">
                                  {fruit.charAt(0).toUpperCase()}
                                </p>
                              </div>
                              <p className="font-bold">{fruit}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">
                                {
                                  FruitsData?.find((f) => f.fruitName === fruit)
                                    ?.description
                                }
                              </p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <p className="empty">no data found</p>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};
export default SelectBox;