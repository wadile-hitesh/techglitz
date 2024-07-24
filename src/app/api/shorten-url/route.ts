import dbConnect from "@/lib/dbConnect";
import UrlModel from "@/model/Url";

export async function POST(request : Request){
  if(request.method !== "POST"){
    return new Response("Method Not Allowed", {status : 405})
  }

  await dbConnect();

  const {url} = await request.json();

  try {
    const addUrl = await UrlModel.create({url : url}, {new : true});

    if(!addUrl){
      return Response.json({
        success : false,
        message : "URL not Shortened"
      })
    }

    return Response.json({
      success : true,
      message : "URL Shortened",
      data : addUrl
    })
    
  } catch (error) {
    console.log("Error Shortening URL", error);
    return Response.json({
      success : false,
      message : "Failed to Shorten URL"
    },
    {
      status : 500
    })
    
  }
}

