import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && {
          postSlug,
        }),
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(comments, {
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

export async function POST(req: NextRequest, res: NextResponse) {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { error: "You must be logged in to create a comment." },
      {
        status: 401,
      }
    );
  }

  try {
    const body = await req.json();

    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });

    return NextResponse.json(comment, {
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
