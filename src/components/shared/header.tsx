import React from "react";
import { cn } from "@/lib/utils";
import { Container, Title, TopBar } from ".";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Rye } from "next/font/google";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={"/logo.png"} alt="logo" width={55} height={55} />
            <div>
              <h1 className="text-2xl uppercase font-black">Wishlist</h1>
              <p className="text-sm text-yellow-600 opacity-70 leading-3">
                расскажи о своих желаниях
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">{/* <SearchInput /> */}</div>

        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            Войти
            <User size={16} />
          </Button>
        </div>
      </Container>
    </header>
  );
};
