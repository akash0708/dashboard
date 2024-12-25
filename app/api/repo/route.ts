import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("from backend", body);

    const formSchema = z.object({
      repositoryName: z.string().min(1, "Repository name is required"),
      technology: z.string().min(1, "Technology is required"),
      visibility: z.enum(["Public", "Private"]),
    });

    const {
      repositoryName: name,
      technology,
      visibility,
    } = formSchema.parse(body);

    console.log("parsed", name, technology, visibility);

    const existingRepository = await prisma.repository.findFirst({
      where: { name },
    });

    if (existingRepository) {
      console.log("Repository name already exists", existingRepository);
      throw new Error("Repository name already exists");
    }

    // Create a new repository
    const repository = await prisma.repository.create({
      data: {
        name,
        technology,
        visibility,
        size: `${Math.floor(Math.random() * 10000)} KB`,
        updatedAt: `${Math.floor(Math.random() * 10)} days ago`,
      },
    });

    console.log("created", repository);

    return NextResponse.json(repository, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        error: error || "Internal Server Error",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const repositories = await prisma.repository.findMany({
      select: {
        id: false,
        name: true,
        visibility: true,
        technology: true,
        size: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(repositories, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
