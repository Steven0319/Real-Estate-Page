"use client";

import { dataProperties } from "@/components/Properties/Properties.data";
import { useParams } from "next/navigation";
import Header from "@/components/Header/Header";
import { Property } from "@/components/Property";
import { Error404 } from "@/components/Error404";
import { Footer } from "@/components/Footer";
import TransitionPage from "@/components/TransitionPage/TransitionPage";

export default function Page() {
  const router = useParams();
  const propertyId = router.page;
  const filteredPage = dataProperties.find((property) => property.id === Number(propertyId));

  return (
    <>
   <TransitionPage/>
    <Header />
      {filteredPage ? <Property house={filteredPage} /> : <Error404 />}
      <Footer />
    </>
  );
}
