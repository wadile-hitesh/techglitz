"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [url,setUrl] = useState<string>("");
  const [generatedQR, setGeneratedQR] = useState<string>(
    "https://res.cloudinary.com/drouz97w8/image/upload/v1711271712/e9fpwopbytayrslhw9j4.png"
  );
  const generateQR = async (url:string) => {
    try {
      const response = await QRCode.toDataURL(url);
      if(response) setGeneratedQR(response);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-10">
        <Input
          className="w-96"
          type="text"
          placeholder="Enter your Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => generateQR(url)}>Generate</Button>
      </div>
      <div>
        <Image
          src={generatedQR}
          priority
          alt="QR Code"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
