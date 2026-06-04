import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = join(process.cwd(), "public", "resume.pdf");
  const file = readFileSync(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Rohit_Gite_Resume.pdf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}