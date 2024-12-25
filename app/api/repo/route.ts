import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const formSchema = z.object({
    repositoryName: z.string().min(1, "Repository name is required"),
    technology: z.string().min(1, "Technology is required"),
    visibility: z.enum(["public", "private"]),
  });

  const {
    repositoryName: name,
    technology,
    visibility,
  } = formSchema.parse(body);

  const repository = await prisma.repository.create({
    data: {
      name,
      technology,
      visibility,
    },
  });

  if (repository.id) {
    return NextResponse.json({ id: repository.id }, { status: 200 });
  } else {
    return NextResponse.json(
      { error: "Could not create new repository" },
      { status: 400 }
    );
  }
}
