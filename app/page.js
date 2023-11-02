"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarouselComponent from "./Components/Carousel";
import Items from "./Components/Items";
import { getCarousel, getDashboard } from "./store/modules/products/actions";
import { registerEmail } from "./store/modules/auth/actions";
import Newsletter from "./Components/Newsletter";
import LoadingScreen from "./filter/Loading";

export default function DefaultPage() {
  const { dashboard, loadingDashboard, successDashboard } = useSelector(
    (state) => state.products
  );
  const [showNewsletter, setShowNewsletter] = useState();
  const dispatch = useDispatch();

  const handleSignUp = (email) => {
    setShowNewsletter(false);
    dispatch(registerEmail(email));
  };

  const handleCancel = () => {
    setShowNewsletter(false);
  };

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getCarousel());
  }, []);

  useEffect(() => {
    successDashboard && setShowNewsletter(true);
  }, [successDashboard]);

  return (
    <>
      <Newsletter
        handleSignUp={handleSignUp}
        show={showNewsletter}
        handleCancel={handleCancel}
      />
      {loadingDashboard ? (
        <LoadingScreen />
      ) : (
        <>
          <CarouselComponent />
          <Items titulo="Tecidos" items={dashboard?.fabrics} />
          <Items
            backgrounded
            titulo="Automotivos"
            items={dashboard?.automotive}
          />
          <Items titulo="Papéis de parede" items={dashboard?.wallpapers} />
          <Items
            backgrounded
            titulo="Acessórios"
            items={dashboard?.accessories}
          />
        </>
      )}
    </>
  );
}
