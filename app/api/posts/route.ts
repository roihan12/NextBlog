import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const page = searchParams.get("page");
    const POST_PER_PAGE = 2;

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (Number(page) - 1),
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return NextResponse.json(
      { posts, count },
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
