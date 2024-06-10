"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../db";
import { auth } from "@clerk/nextjs/server";

export async function deleteTodo(id: number) {
  const { userId } = auth();
//   if (!userId) return;
  await prisma.todo.delete({ where: { id } });
  revalidatePath(`/`);
}
