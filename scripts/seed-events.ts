
import { prisma } from "@/lib/db";
const { PrismaClient } = require('@prisma/client');

async function main() {
  try {
    await prisma.event.createMany({
      data: [
        {
          thumb: "https://picsum.photos/id/247/348/185",
          image: "https://picsum.photos/id/247/1520/318",
          title: "Workshop de Eficiência Elétrica 2023",
          author: "Schneider Electric",
          data: "2023-09-15",
          text: "Junte-se a nós no Workshop de Eficiência Energética da Schneider Electric, onde exploraremos as melhores práticas e soluções para otimizar o consumo de energia em diversos setores. Especialistas da empresa irão compartilhar suas visões e experiências, e você terá a oportunidade de interagir e aprender com colegas de diversas áreas.",
        }
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();