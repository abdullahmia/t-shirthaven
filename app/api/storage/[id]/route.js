import { updateFileFromCloudinary } from "@/lib/cloudinary";
import { decodeString } from "@/utils/string-utils";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  let { id } = params;

  const formData = await req.formData();
  const file = formData.get("file");

  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  // this will be used to upload the file
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  const res = await updateFileFromCloudinary(fileUri, decodeString(id));

  if (res.success && res.url) {
    return NextResponse.json({
      message: "success",
      url: res.url,
      publicId: res.publicId,
    });
  } else return NextResponse.json({ message: "failure" });
}
