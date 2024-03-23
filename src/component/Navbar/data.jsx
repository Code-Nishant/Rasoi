//importing icons
import { FaHome } from "react-icons/fa";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";



export const dataItems = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/",
    class:"home"
  },
  {
    title: "Recipes",
    icon: <MdOutlineRestaurantMenu />,
    link: "/recipes",
    class:"recipes"
  },
  {
    title: "Cuisine",
    icon: <GiHotMeal />,
    link: "/cuisine",
    class:"cuisine"
  },
  {
    title: "Favourities",
    icon: <IoMdHeart/>,
    link: "/favourites",
    class:"favourites"
  },
  {
    title: "About",
    icon: <FaUserFriends />,
    link: "/about",
    class:"about"
  },
];
