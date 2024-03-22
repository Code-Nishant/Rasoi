//importing icons
import { FaHome } from "react-icons/fa";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";

// import { SiCodechef } from "react-icons/si";

export const dataItems = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/",
  },
  {
    title: "Recipes",
    icon: <MdOutlineRestaurantMenu />,
    link: "/recipes",
  },
  {
    title: "Cuisine",
    icon: <GiHotMeal />,
    link: "/cuisine",
  },
  {
    title: "Favourities",
    icon: <IoMdHeart/>,
    link: "/favourites",
  },
  {
    title: "About",
    icon: <FaUserFriends />,
    link: "/about",
  },
];
