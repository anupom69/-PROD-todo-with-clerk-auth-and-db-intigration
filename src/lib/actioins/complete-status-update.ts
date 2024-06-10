"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "../db";

export async function updateComplete({id, completed}: {id: number, completed: boolean}) {
  const { userId } = auth();
  if (!userId) return;
  await prisma.todo.update({
    where: { id },
    data: {
      completed,
    },
  });
}
