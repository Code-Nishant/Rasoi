//importing icons
import { FaHome } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import { FaPortrait } from "react-icons/fa";

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
    icon: <IoFastFoodOutline />,
    link: "/favourites",
  },
  {
    title: "About",
    icon: <FaPortrait />,
    link: "/about",
  },
];
