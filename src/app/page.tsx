import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container, Title, TopBar, WishCard } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Wishlist" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={["Все", "Публичные", "Приватные"]} />

      <Container className="mt-10 flex flex-col gap-4">
        <WishCard
          data={{
            id: 1,
            name: "Станок бритвенный Philips Standar - 12300",
            description:
              "Станок для бритья бороды и волос мужской. Линейка 2024 года.",
            image:
              "https://ir-2.ozone.ru/s3/multimedia-1-4/wc1000/7119515332.jpg",
            date: 999,
            price: 1000,
            link: "",
          }}
        />
        <WishCard
          data={{
            id: 2,
            name: "Посудомоечная машина Polaris Expert 3000",
            description:
              "Встраиваемая поусдомоченая машина итальянского производства линейки 2021 года.",
            image:
              "https://ir-2.ozone.ru/s3/video-50/01J5D7WP05T4QMEPP22H49MN5V/cover/wc1000/cover.jpg",
            date: 999,
            price: 1000,
            link: "",
          }}
        />
        <WishCard
          data={{
            id: 3,
            name: "Кофемашина DeLongis Delux 1000",
            description:
              "Кофемашина способная сварить 10 разновидностей кофе, а так же выдать кипяток 99-градусной температуры.",
            image:
              "https://ir-2.ozone.ru/s3/multimedia-e/wc1000/6732771350.jpg",
            date: 999,
            price: 1000,
            link: "",
          }}
        />
      </Container>
    </>
  );
}
