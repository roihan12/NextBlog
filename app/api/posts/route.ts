import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const page = searchParams.get("page");
    const category = searchParams.get("category");
    const POST_PER_PAGE = 2;

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (Number(page) - 1),
      where: {
        ...(category && {
          catSlug: category,
        }),
      },
    };
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
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

// Create a Post
export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { error: "You must be logged in to create a post." },
      {
        status: 401,
      }
    );
  }

  try {
    const body = await req.json();

    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return NextResponse.json(post, {
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
