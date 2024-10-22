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
    userPicture: IconComponent({ size: 50, color:"red" }),
    story: [""],
  },
  {
    id: 2,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 3,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 4,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 5,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 6,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 7,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 8,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 9,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
  {
    id: 10,
    username: "juewell",
    userPicture: IconComponent({ size: 50 }),
    story: [""],
  },
];