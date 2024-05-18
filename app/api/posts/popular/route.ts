import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const popularPost = await prisma.post.findMany({
      orderBy: {
        views: "desc",
        
      },
      take: 4,
      include: {
        user: true,
      },
    });

    return NextResponse.json(popularPost, {
      status: 200,
    });
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
