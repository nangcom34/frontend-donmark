"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { API_URL, URL_IMAGES } from "../../../config/constants";
import axios from "axios";
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Slide from "../components/Slide";

export default function Home() {
  const [imageProduct, setImageProduct] = useState("");

  useEffect(() => {
    loadImageProduct();
  }, []);
  const loadImageProduct = async () => {
    await axios
      .post(API_URL + "/imageProductsale", {
        limit: null,
        sort: "createdAt",
        order: "desc",
      })
      .then((res) => {
        //console.log(res.data);
        setImageProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <Header />
      <Navbar />
      <Slide />
      <section
        className={`${
          imageProduct.length === 0 ? "h-full min-h-[63vh] mx-auto max-w-screen-xl flex flex-col items-center justify-center" : "hidden"
        }`}
      >
        <Image
          src={`/images/logo.png`}
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] object-cover animate-spin"
          style={{
            loading: "lazy",
          }}
        />
      </section>
      {imageProduct &&
        imageProduct.map((imageProductItem) => (
          <section
            key={imageProductItem._id}
            className="flex items-center justify-center w-full max-w-screen-xl mx-auto"
          >
            {" "}
            <Image
              src={`${URL_IMAGES}${imageProductItem.file}`}
              alt={imageProductItem._id}
              width={1280}
              height={1280}
              className="w-full h-auto object-fill object-center"
              style={{
                loading: "lazy",
              }}
            />
          </section>
        ))}
      <Footer />
    </main>
  );
}
