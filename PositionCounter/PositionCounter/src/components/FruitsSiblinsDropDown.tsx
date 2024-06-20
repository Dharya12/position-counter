import { IFruit, ISiblingDropDown } from "../Types/fruit";

export default function FruitsSiblinsDropDown({
  data,
  handleCheckbox,
  selectedFruits,
  toggleSiblings,
  openSiblings,
}: ISiblingDropDown) {
  return (
    <div>
      <div className="absolute mt-1 pt-2 overflow-y-scroll card w-[400px]">
        {data?.map(
          (item: IFruit, index: number) =>
            !item?.parentId && (
              <div className="flex justify-between pr-6" key={index}>
                <div
                  className="flex flex-row items-center gap-4 ml-2 mb-1 cursor-pointer"
                  onClick={() => {
                    handleCheckbox(item.fruitName);
                  }}
                >
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={selectedFruits?.includes(item.fruitName)}
                  />
                  <p>{item.fruitName}</p>
                </div>
                <div>
                  <button
                    className="siblingDropdownButton"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSiblings(item.fruitName);
                    }}
                  >
                    {openSiblings[item.fruitName] ? (
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
                            d="M4.29289 15.7071C4.68342 16.0976 5.31658 16.0976 5.70711 15.7071L12 9.41421L18.2929 15.7071C18.6834 16.0976 19.3166 16.0976 19.7071 15.7071C20.0976 15.3166 20.0976 14.6834 19.7071 14.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L4.29289 14.2929C3.90237 14.6834 3.90237 15.3166 4.29289 15.7071Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    ) : (
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
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}