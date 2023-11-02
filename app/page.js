"use client";

import CarouselComponent from "./Components/Carousel";
import Items from "./Components/Items";
import { ITEMS } from "./consts/MOCKED_DATA";

export default function DefaultPage() {
  return (
    <>
      {/* <Assinatura /> */}
      <CarouselComponent />
      <Items
        titulo="Tecidos"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
      <Items
        backgrounded
        titulo="Automotivos"
        items={ITEMS.filter((item) => item.tags.includes("tecidos"))}
      />
      <Items
        titulo="Papéis de parede"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
      <Items
        backgrounded
        titulo="Acessórios"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
    </>
  );
}
