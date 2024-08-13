"use client"
import Navbar from "./components/navbar"
import Card from "./components/card"
import Swiper from "./components/swiperCarousel/swiper"

export default function Home() {

  return (
    <>
    <Navbar />
    <Swiper />
    <main className="flex min-h-screen flex-col items-center">
      <Card />
    </main>
    </>
  );
}
