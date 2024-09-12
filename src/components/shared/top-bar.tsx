import { cn } from "@/lib/utils";
import React from "react";
import { Container } from ".";
import { Button } from "../ui";
import Link from "next/link";

interface Props {
  categories: string[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div
      className={cn(
        "sticky top-0   bg-black py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        {/* <Categories items={categories} /> */}
        {/* <SortPopup /> */}
        <Link href={"/wish/add"}>
          <Button variant={"secondary"}>Добавить</Button>
        </Link>
      </Container>
    </div>
  );
};
