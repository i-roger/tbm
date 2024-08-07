"use client"
import Image from "next/image";
import Navbar from "./components/navbar"
import Card from "./components/card"
import Carousel from "./components/carousel"

export default function Home() {

  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center">
      <Carousel />
      <Card />
      
    </main>
    </>
  );
}
