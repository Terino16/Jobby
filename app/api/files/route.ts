import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/lib/pinata";

export async function POST(request: NextRequest) {
    console.log("HI")
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const uploadData = await pinata.upload.file(file)
    const url = await pinata.gateways.createSignedURL({
     	cid: uploadData.cid,
     	expires: 3600,
  	});
    return NextResponse.json({ 
      message:"File uploaded successfully",
      url:url,
      status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Internal Server Error",
        status: 500
      }
    );
  }
}
