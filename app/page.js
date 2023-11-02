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
        items={ITEMS.filter((item) => item.tags.includes("tecidos"))}
      />
      <Items
        titulo="Automotivos"
        items={ITEMS.filter((item) => item.tags.includes("automotivos"))}
      />
    </>
  );
}
