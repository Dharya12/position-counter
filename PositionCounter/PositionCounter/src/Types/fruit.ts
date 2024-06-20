export interface IFruitSibling {
  fruitName: string;
  category: string;
  description: string;
  parentId: string;
}
export interface IFruit {
  fruitName: string;
  category: string;
  description: string;
  parentId?: string;
  siblings?: IFruitSibling[];
}

export interface DropDownProps {
  reference: React.RefObject<HTMLDivElement>;
  setDropDown: (isOpen: boolean) => void;
  isOpen: boolean;
  data: IFruit[];
  handleCheckbox: (fruitName: string) => void;
  selectedFruits: string[];
}

export interface ISiblingDropDown{
  data: IFruit[];
  handleCheckbox: (fruitName: string) => void;
  selectedFruits: string[];
  openSiblings: { [key: string]: boolean };
  toggleSiblings: (fruitName: string)=> void;
}
