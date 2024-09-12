"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { DoorClosed, ShieldClose, SquareX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, InputWithLabel, TextareaWithLabel } from "@/components/ui";
import { Container } from "@/components/shared";
import { useRouter } from "next/navigation";

export default function WishEditPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Wish>();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const exit = () => router.push(`/`);

  const onSubmit: SubmitHandler<Wish> = (data) => {
    console.log(data);
    exit();
  };

  const newImage = watch("image");

  return (
    <Container className="py-[2%] px-[10%] ">
      <form
        className="flex flex-col gap-3 border overflow-hidden rounded-lg transotion-all shadow-white-shadow hover:shadow-gold-shadow-hover p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <h2>Создание</h2>
          <SquareX
            className="cursor-pointer opacity-75 hover:opacity-100"
            onClick={() => {
              exit();
            }}
          />
        </div>

        <div className="w-full flex justify-center">
          <img
            loading="lazy"
            className="w-[30%] max-md:w-[50%] max-sm:w-[90%]"
            src={newImage}
            alt="Место для картинки"
          />
        </div>
        <InputWithLabel {...register("image")} label="Ссылка на изображение" />
        <InputWithLabel {...register("name")} label="Наименование" />
        <TextareaWithLabel {...register("description")} label="Описание" />
        <InputWithLabel {...register("price")} label="Цена" />
        <InputWithLabel {...register("link")} label="Ссылка" />
        <div className="flex justify-around">
          <Button type="submit" variant={"secondary"}>
            Сохранить
          </Button>
        </div>
      </form>
    </Container>
  );
}
