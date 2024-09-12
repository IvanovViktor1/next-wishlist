"use client";

import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  data: Wish;
  className?: string;
}

export const WishCard: React.FC<Props> = ({ className, data }) => {
  const router = useRouter();
  dayjs.locale("ru");
  const formattedDate = dayjs().format("D MMMM HH:mm");

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/wish/edit/${data.id}`);
  };

  return (
    <div className={cn("flex align-center justify-center", className)}>
      <Link
        href={`/wish/${data.id}`}
        className={cn(
          "flex flex-row align-middle shadow-white-shadow border rounded-xl w-[50%] cursor-pointer overflow-hidden transition-all duration-500 hover:w-[70%] hover:shadow-gold-shadow-hover max-lg:w-[90%] max-lg:hover:w-full",
          className
        )}
      >
        <img
          src={data.image}
          className="mr-3 p-0 w-28 h-28 rounded-md hidden sm:block"
          alt="image"
        />

        <div className="w-full flex flex-col p-1 gap-1 overflow-hidden">
          <span className="truncate text-lg">{data.name}</span>

          <span className="truncate text-zinc-400 text-sm">
            {data.description}
          </span>

          <span className="truncate text-zinc-400 text-sm">
            {data.price} р.
          </span>

          <div className="truncate flex justify-between items-end">
            <span className="truncate text-gray-400 text-xs">
              изм. {formattedDate}
            </span>
            <span
              className="text-gray-400 hover:text-amber-300 truncate"
              onClick={handleEdit}
            >
              редактировать
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
