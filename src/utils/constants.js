import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to provide exceptional footwear products and a memorable shopping experience to our customers, while promoting comfort, fashion, and sustainability.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to empower every individual to express themselves through the footwear they wear, while promoting comfort, quality, and social responsibility.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Since our establishment, we have been committed to providing high-quality footwear that combines fashion and comfort. Our history is rooted in a passion for innovative design and a commitment to sustainability. Through decades of experience, we have developed a reputation for excellence and an unwavering dedication to serving our customers.",
  },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/singleproduct?id=`;
