import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="flex w-[50%] bg-gray-950 relative">
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl">
          This is a NFT marketplace, you can mint, sell and buy NFT here. If you
          want to try, just connect and let's have fun.
        </div>
      </div>

      {/* right */}
      <div className="flex w-[50%] bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button className="w-40 h-16 rounded-xl text-2xl">Connect</Button>
        </div>
      </div>
    </div>
  );
}
