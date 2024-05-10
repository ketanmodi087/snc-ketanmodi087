import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Add mock company
  const a = await prisma.company.createMany({
    data: [
      { name: "Company 1" },
      { name: "Company 2" },
      { name: "Company 3" },
      { name: "Company 4" },
    ],
  });
  // TODO: Add mock users
  await prisma.user.create({
    data: {
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      profilePictureUrl:
        "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
      name: "PersonA",
      title: "Backend Developer",
      followers: 15000,
      following: 500,
      companies: {
        connect: [{ id: 1 }, { id: 2 }],
      },
    },
  });
  await prisma.user.create({
    data: {
      backgroundImageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      profilePictureUrl:
        "https://images.squarespace-cdn.com/content/v1/51efe10de4b025019c37bb06/1566986917034-2MGUTZB04MU2GFSPAC10/London-corporate-headshot-photography.jpg",
      name: "PersonB",
      title: "Full Stack Developer",
      followers: 20000,
      following: 1000,
      companies: {
        connect: [{ id: 3 }, { id: 4 }],
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
