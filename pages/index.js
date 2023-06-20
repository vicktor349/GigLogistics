import MiniNavbar from "@/components/MiniNavbar"
import Image from "next/image"
import React from "react"
import banner from '../public/image/banner.jpeg'
import { Input } from "@mantine/core"
import Button from "@/components/Button"
import DeliveryService from "@/components/DeliveryService"
import DownloadApp from "@/components/DownloadApp"
import WhatWeDo from "@/components/WhatWeDo"


export default function Home() {
  return (
    <main className="fonts-[Inter]">
      <div>
        {/* MINI NAVBAR */}
        <MiniNavbar />

        {/* BANNER BACKGROUND IMAGE */}
        <div className="flex">
          <Image src={banner}
            alt="banners"
            className="absolute 
              brightness-[0.3]
              object-cover
              min-h-[630px]"
            priority={true}
          />
          <div className="mx-auto mt-[250px] z-30">
            <Input className="md:w-[500px] ssm:mx-4"
              rightSection={
                <div className="mr-12">
                  <Button text='Search' />
                </div>
              }
              size="lg"
              placeholder="Input tracking ID/Alphacode"
            />
            <h3 className="mt-4 font-medium text-white text-center">Track shipment / Find and ship a product using Alphacode</h3>
          </div>
        </div>
        <DeliveryService />
        <DownloadApp />
        <WhatWeDo />
      </div>
    </main>
  )
}
