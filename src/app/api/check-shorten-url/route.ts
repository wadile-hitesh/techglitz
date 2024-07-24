import mongoose from "mongoose";
import UrlModel from "@/model/Url";


export async function GET(request : Request){
  if(request.method !== "GET"){
    return new Response("Method Not Allowed", {status : 405})
  }

  
}