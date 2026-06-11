/* eslint-disable */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.book.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.service.deleteMany();

  // Create sample books
  await prisma.book.create({
    data: {
      title: "The Art of Publishing",
      author: "Jane Smith",
      description:
        "A comprehensive guide to modern publishing strategies and techniques for aspiring authors. Learn how to navigate the publishing world with confidence.",
      coverImage: "/book-cover-1.png",
      price: 29.99,
      status: "PUBLISHED",
    },
  });

  await prisma.book.create({
    data: {
      title: "Digital Dreams",
      author: "Michael Johnson",
      description:
        "Explore the intersection of technology and literature in this groundbreaking work. Discover how digital platforms are transforming the way we read.",
      coverImage: "/book-cover-2.png",
      price: 24.99,
      status: "PUBLISHED",
    },
  });

  await prisma.book.create({
    data: {
      title: "Stories from the Heart",
      author: "Sarah Williams",
      description:
        "A collection of touching personal narratives that will inspire and move you. Real stories from real people about overcoming challenges and finding purpose.",
      coverImage: "/book-cover-3.png",
      price: 19.99,
      status: "PUBLISHED",
    },
  });

  await prisma.book.create({
    data: {
      title: "The Publishing Revolution",
      author: "David Brown",
      description:
        "How independent authors are changing the literary landscape. A practical guide to self-publishing success in the modern era.",
      coverImage: "/book-cover-4.png",
      price: 34.99,
      status: "PUBLISHED",
    },
  });

  // Create sample testimonials
  await prisma.testimonial.create({
    data: {
      author: "Lisa Anderson",
      content:
        "American Pen House helped me publish my first book. The team was incredible and supportive throughout the entire process!",
      rating: 5,
    },
  });

  await prisma.testimonial.create({
    data: {
      author: "Robert Martinez",
      content:
        "Professional, timely, and affordable. I couldn't ask for a better publishing partner. Highly recommended!",
      rating: 5,
    },
  });

  // Create sample services
  await prisma.service.create({
    data: {
      name: "Print Publishing",
      description:
        "High-quality print books for distribution through major retailers",
      features: [
        "Hardcover & Paperback",
        "Full-color printing",
        "Custom binding",
        "Global distribution",
      ],
    },
  });

  await prisma.service.create({
    data: {
      name: "E-Book Publishing",
      description: "Digital publishing for all major platforms",
      features: [
        "EPUB & MOBI formats",
        "Amazon KDP integration",
        "Multi-platform distribution",
        "DRM-free options",
      ],
    },
  });

  await prisma.service.create({
    data: {
      name: "Book Editing",
      description: "Professional editing and proofreading services",
      features: [
        "Content editing",
        "Copy editing",
        "Proofreading",
        "Feedback reports",
      ],
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
