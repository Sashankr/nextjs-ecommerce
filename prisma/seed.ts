import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  const electronics = await prisma.category.create({
    data: {
      name: "Electoronics",
      slug: "/electronics",
    },
  });

  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "/clothing",
    },
  });

  const home = await prisma.category.create({
    data: {
      name: "Home",
      slug: "/home",
    },
  });
}

main()
  .then(async () => {
    console.log("Seeding complete!");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
