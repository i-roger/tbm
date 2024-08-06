"use client"
import Image from "next/image";
import Navbar from "./components/navbar"
import Card from "./components/card"

export default function Home() {

  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center">
      <Card/>
    </main>
    </>
  );
}
