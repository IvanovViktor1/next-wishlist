"use client";

import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import { CornerUpRight, Edit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function WishPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const item = {
    id: 1,
    name: "Станок бритвенный Philips Standar - 12300",
    description: "Станок для бритья бороды и волос мужской. Линейка 2024 года.",
    image: "https://ir-2.ozone.ru/s3/multimedia-1-4/wc1000/7119515332.jpg",
    date: "999",
    price: "1000",
    link: "https://google.com",
  };

  return (
    <Container className="mt-10">
      <div className="flex justify-between items-center max-md:px-4 max-md:justify-center">
        <h1 className="text-3xl max-md:text-lg">{item.name}</h1>
        <div className="flex max-md:fixed right-10 gap-2 max-md:top-5 max-md:flex-col">
          <Link href={item.link}>
            <Button
              variant={"secondary"}
              className="flex justify-between rounded-sm gap-1 max-md:text-xs max-md:font-extralight max-md:h-3 max-md:w-[100%] max-md:p-2"
            >
              Поделиться
              <CornerUpRight size={16} />
            </Button>
          </Link>
          <Link href={"/wish/edit/" + item.id}>
            <Button
              variant={"secondary"}
              className="flex justify-between rounded-sm gap-1 max-md:text-xs max-md:font-extralight max-md:h-3 max-md:w-[100%] max-md:p-2"
            >
              Редактировать
              <Edit size={16} />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full flex mt-10 gap-10 max-md:flex-col max-md:px-10 max-md:items-center max-md:gap-2 max-md:mt-0">
        <img src={item.image} alt="image" className="w-[30%] h-fit" />
        <div className="flex flex-col gap-8  max-lg:gap-2">
          <div className="flex flex-col">
            <label className="text-sm text-amber-600 max-md:text-xs">
              описание
            </label>
            <span className="text-2xl max-md:text-base">
              {item.description}
            </span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-amber-600 max-md:text-xs">
              цена
            </label>
            <span className="text-2xl max-md:text-base">{item.price}</span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-amber-600 max-md:text-xs">
              дата последнего изменения
            </label>
            <span className="text-2xl max-md:text-base">{item.date}</span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-amber-600 max-md:text-xs">
              ссылка
            </label>
            <a className="text-2xl max-md:text-base" href={item.link}>
              {item.link}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
