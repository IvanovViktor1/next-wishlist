import { Link } from "next/link";
declare global {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  type Wish = {
    id: number;
    name: string;
    description: string;
    image: string;
    date: number;
    price: number;
    link: string;
  };
}
