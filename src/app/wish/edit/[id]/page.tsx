"use client";

import { useState } from "react";

import { Container } from "@/components/shared";
import { Button, InputWithLabel, TextareaWithLabel } from "@/components/ui";

import { CornerUpRight, SaveAll, Trash2 } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

const item = {
  id: 1,
  name: "Станок бритвенный Philips Standar - 12300",
  description: "Станок для бритья бороды и волос мужской. Линейка 2024 года.",
  image: "https://ir-2.ozone.ru/s3/multimedia-1-4/wc1000/7119515332.jpg",
  date: 999,
  price: 1000,
  link: "google.com",
};

export default function WishEditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    values: item,
  });

  const exit = () => router.push(`/`);

  const onSubmit: SubmitHandler<Wish> = (data) => {
    console.log(data);
    exit();
  };

  const handleShare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(item.link);
  };

  const newImage = watch("image");

  return (
    <Container className="mt-10 px-8 flex flex-col items-center gap-4">
      <form
        className="w-full border flex flex-row rounded-lg transotion-all shadow-white-shadow hover:shadow-gold-shadow-hover max-md:flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* image */}
        <div className="w-[30%] flex flex-col justify-between gap-2 p-4  max-md:px-10 max-md:w-full">
          <img src={item.image} alt="image" className="max-md:w-[50%]" />
          <InputWithLabel
            value={item.image}
            label="Ссылка на изображение"
            className="transition-all hover:border-amber-800 bg-black max-md:w-full "
          />
        </div>

        {/* description */}
        <div className="w-full  flex flex-col gap-2 max-sm:pb-96">
          <div className="flex justify-end p-1 max-md:fixed max-md:bottom-5 max-md:right-5">
            <div className="border bg-black border-amber-600 border-opacity-50 flex flex-row rounded-md transition-all hover:border-opacity-80 max-md:border-yellow-100 max-md:bg-opacity-75 max-md:scale-80  ">
              <Button variant={"ghost"} className="w-20 h-8" type="submit">
                <SaveAll className="w-4 max-md:w-[100%]" />
              </Button>
              <Button
                variant={"ghost"}
                className="w-20 h-8"
                onClick={handleShare}
              >
                <CornerUpRight className="w-4 max-md:w-[100%]" />
              </Button>
              <Button variant={"ghost"} className="w-20 h-8">
                <Trash2 className="w-4 max-md:w-[100%]" />
              </Button>
            </div>
          </div>

          <div className="px-10 pb-4 flex flex-col gap-2">
            <InputWithLabel
              value={item.name}
              label="Наименование"
              className="transition-all hover:border-amber-800 bg-black"
            />
            <TextareaWithLabel
              value={item.description}
              label="Описание"
              className="transition-all hover:border-amber-800 bg-black"
            />
            <InputWithLabel
              value={item.price}
              label="Цена в рублях"
              className="transition-all hover:border-amber-800 bg-black"
            />
            <InputWithLabel
              value={item.link}
              label="Ссылка"
              className="transition-all hover:border-amber-800 bg-black"
            />
          </div>
        </div>
      </form>
    </Container>
  );
}
