import { ReactElement } from "react";
import IconComponent from "./IconComponent"

export interface UserStoryObject {
  id: number;
  username: string;
  userPicture?: ReactElement
  story?: string[];
  size?: number 
  color?: string
  name?: string
}

export const userData = [
  {
    id: 1,
    username: "Your story",
    userPicture: require("@/assets/images/JuewellProfilepic.jpg"),
    story: [""],
  },
  {
    id: 2,
    username: "Karennne",
    userPicture: require("@/assets/images/People/person4.jpg"),
    story: [""],
  },
  {
    id: 3,
    username: "Sarushka",
    userPicture: require("@/assets/images/Sarushka.png"),
    story: [""],
  },
  {
    id: 4,
    username: "Kiero",
    userPicture: require("@/assets/images/People/person5.jpg"),
    story: [""],
  },
  {
    id: 5,
    username: "Zack",
    userPicture: require("@/assets/images/People/person2.jpg"),
    story: [""],
  },
  {
    id: 6,
    username: "Craig",
    userPicture: require("@/assets/images/People/person3.jpg"),
    story: [""],
  },
  {
    id: 7,
    username: "Angela",
    userPicture: require("@/assets/images/People/person6.jpg"),
    story: [""],
  },
  {
    id: 8,
    username: "Sarah",
    userPicture: require("@/assets/images/People/person7.jpg"),
    story: [""],
  },
  {
    id: 9,
    username: "Linh",
    userPicture: require("@/assets/images/Pexel/pexels-img14.jpg"),
    story: [""],
  },
  {
    id: 10,
    username: "Laura",
    userPicture: require("@/assets/images/Pexel/pexels-img13.jpg"),
    story: [""],
  },
];