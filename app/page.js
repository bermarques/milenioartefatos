"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselComponent from "./Components/Carousel";
import Items from "./Components/Items";
import { ITEMS } from "./consts/MOCKED_DATA";
import { getDashboard } from "./store/modules/products/actions";

export default function DefaultPage() {
  const { dashboard } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboard());
  }, []);
  return (
    <>
      {/* <Assinatura /> */}
      <CarouselComponent />
      <Items titulo="Tecidos" items={dashboard?.fabrics} />
      <Items backgrounded titulo="Automotivos" items={dashboard?.automotive} />
      <Items titulo="Papéis de parede" items={dashboard?.wallpapers} />
      <Items backgrounded titulo="Acessórios" items={dashboard?.accessories} />
    </>
  );
}
