import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(
       categories,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
}
