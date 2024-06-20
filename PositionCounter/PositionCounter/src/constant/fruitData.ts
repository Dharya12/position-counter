// import { IFruit } from "../Types/fruit";

// const FruitsData: IFruit[] = [
//   {
//     fruitName: "Apple",
//     description: "A sweet, edible fruit produced by an apple tree.",
//     siblings: [
//       {
//         fruitName: "Green Apple",
//         description: ""
//       }

//     ]
//   },
//   {
//     fruitName: "Banana",
//     description: "An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.",
//   },
//   {
//     fruitName: "Avocado",
//     description: "A large berry containing a single large seed, known for its creamy texture.",
//   },
//   {
//     fruitName: "Pineapple",
//     description: "A tropical plant with an edible fruit consisting of coalesced berries.",
//   },
//   {
//     fruitName: "Watermelon",
//     description: "A large fruit with a hard green rind and sweet, juicy, usually red flesh.",
//   },
//   {
//     fruitName: "Kiwi",
//     description: "A small fruit with a fuzzy brown skin and bright green flesh with tiny black seeds.",
//   },
//   {
//     fruitName: "Orange",
//     description: "A round, juicy citrus fruit with a tough bright reddish-yellow rind.",
//   },
//   {
//     fruitName: "Blueberry",
//     description: "A small sweet blue-black edible berry.",
//   },
//   {
//     fruitName: "Papaya",
//     description: "A tropical fruit shaped like an elongated melon, with edible orange flesh and small black seeds.",
//   },
// ];

// export { FruitsData };


interface IFruit {
  fruitName: string;
  category: string;
  description: string;
  parentId?: string;
}

const FruitsData:IFruit[] = [
  {
    fruitName: "Apple",
    category: "Apple",
    description: "A sweet, edible fruit produced by an apple tree.",
  },
{
    fruitName: "Green Apple",
    category: "Apple",
    description: "A tart, green-skinned apple that is crisp and juicy.",
    parentId: "Apple",
  },
{
    fruitName: "Red Apple",
    category: "Apple",
    description: "A sweet variety of apple with a deep red skin.",
    parentId: "Apple",
  },
{
    fruitName: "Banana",
    category: "Banana",
    description:
      "An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.",
  },
{
    fruitName: "Plantain",
    category: "Banana",
    description: "A starchy, banana-like fruit used in cooking.",
    parentId: "Banana",
  },
{
    fruitName: "Red Banana",
    category: "Banana",
    description: "A sweet banana with a reddish-purple skin.",
    parentId: "Banana",
  },
{
    fruitName: "Avocado",
    category: "Avocado",
    description:
      "A large berry containing a single large seed, known for its creamy texture.",
  },
{
    fruitName: "Hass Avocado",
    category: "Avocado",
    description: "A popular variety of avocado with dark, bumpy skin.",
    parentId: "Avocado",
  },
{
    fruitName: "Fuerte Avocado",
    category: "Avocado",
    description: "A pear-shaped avocado with smooth, green skin.",
    parentId: "Avocado",
  },
{
    fruitName: "Pineapple",
    category: "Pineapple",
    description:
      "A tropical plant with an edible fruit consisting of coalesced berries.",
  },
{
    fruitName: "Queen Pineapple",
    category: "Pineapple",
    description: "A small, sweet variety of pineapple.",
    parentId: "Pineapple",
  },
 {
    fruitName: "Red Spanish Pineapple",
    category: "Pineapple",
    description: "A variety known for its vibrant color and tangy taste.",
    parentId: "Pineapple",
  },
 {
    fruitName: "Watermelon",
    category: "Watermelon",
    description:
      "A large fruit with a hard green rind and sweet, juicy, usually red flesh.",
  },
 {
    fruitName: "Yellow Watermelon",
    category: "Watermelon",
    description: "A variety of watermelon with yellow flesh.",
    parentId: "Watermelon",
  },
 {
    fruitName: "Seedless Watermelon",
    category: "Watermelon",
    description:
      "A watermelon variety that has been bred to contain no seeds.",
    parentId: "Watermelon",
  },
 {
    fruitName: "Kiwi",
    category: "Kiwi",
    description:
      "A small fruit with a fuzzy brown skin and bright green flesh with tiny black seeds.",
  },
 {
    fruitName: "Golden Kiwi",
    category: "Kiwi",
    description: "A sweeter, golden-fleshed variety of kiwi.",
    parentId: "Kiwi",
  },
 {
    fruitName: "Baby Kiwi",
    category: "Kiwi",
    description: "A small, grape-sized kiwi with smooth, edible skin.",
    parentId: "Kiwi",
  },
 {
    fruitName: "Orange",
    category: "Orange",
    description:
      "A round, juicy citrus fruit with a tough bright reddish-yellow rind.",
  },
 {
    fruitName: "Blood Orange",
    category: "Orange",
    description: "A variety of orange with red, blood-colored flesh.",
    parentId: "Orange",
  },
 {
    fruitName: "Mandarin Orange",
    category: "Orange",
    description: "A small, sweet variety of orange with a loose skin.",
    parentId: "Orange",
  },
 {
    fruitName: "Blueberry",
    category: "Blueberry",
    description: "A small sweet blue-black edible berry.",
  },
 {
    fruitName: "Wild Blueberry",
    category: "Blueberry",
    description:
      "A smaller, more intensely flavored variety of blueberry.",
    parentId: "Blueberry",
  },
 {
    fruitName: "Highbush Blueberry",
    category: "Blueberry",
    description:
      "A common variety of blueberry cultivated for its large size.",
    parentId: "Blueberry",
  },
 {
    fruitName: "Papaya",
    category: "Papaya",
    description:
      "A tropical fruit shaped like an elongated melon, with edible orange flesh and small black seeds.",
  },
 {
    fruitName: "Red Papaya",
    category: "Papaya",
    description: "A variety of papaya with reddish-orange flesh.",
    parentId: "Papaya",
  },
 {
    fruitName: "Green Papaya",
    category: "Papaya",
    description: "An unripe papaya often used in savory dishes.",
    parentId: "Papaya",
  },
]

export { FruitsData };

