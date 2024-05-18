import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const slug = context.params.slug;

  try {
    const post = await prisma.post.update({
      where: {
        slug: slug!,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: true,
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
