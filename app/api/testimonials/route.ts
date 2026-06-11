import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const testimonialSchema = z.object({
  author: z.string().min(1, "Author name is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().url("Must be a valid image URL").optional(),
  rating: z.number().min(1).max(5).default(5),
});

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = testimonialSchema.parse(body);

    const testimonial = await prisma.testimonial.create({
      data: validatedData,
    });

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}
