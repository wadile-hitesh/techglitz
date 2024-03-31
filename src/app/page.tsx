"use client"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QRCode from "qrcode";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import GenerateQR from "@/components/GenerateQR/GenerateQR";

export default function Home() {
  const [url,setUrl] = useState<string>("");
  const [generatedQR, setGeneratedQR] = useState<string>(
    "https://res.cloudinary.com/drouz97w8/image/upload/v1711883328/oluyrjhsf7jjcadl3vlr.jpg"
  );
  const generateQR = async (url:string) => {
    try {
      let options = {
        errorCorrectionLevel: "H",
        version : 2,
        type: "image/jpeg",
        quality: 1,
        margin: 2,
        scale : 100,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF",
        },
      };
      QRCode.toDataURL(
        "Some Text",
        options as QRCode.QRCodeOptions,
        function (err, url) {
          setGeneratedQR(url);
          console.log(url);
        }
      );
      // if(!response) throw new Error("Error in generating QR Code");
      // console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <GenerateQR />
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
        <Footer />
    </div>
  );
}
