import tour1 from "./images/tour-1.jpg";
import tour2 from "./images/tour-2.jpg";
import tour3 from "./images/tour-3.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, possimus.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },

  {
    id: 2,
    image: tour2,
    date: "August 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, possimus.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },

  {
    id: 3,
    image: tour3,
    date: "August 26th, 2024",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, possimus.",
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
];
