"use server"
import { revalidatePath } from "next/cache";
import { prisma } from "../db";
import { z } from "zod";
const formSchema = z.object({
  title: z.string().min(3),
});

interface CreateTaskFormState {
  errors: {
    title?: string[];
    _form?: string[];
  };
}
export async function createTask(
  userId: string | null,
  formState: CreateTaskFormState,
  formData: FormData
): Promise<CreateTaskFormState> {
  const result = formSchema.safeParse({
    title: formData.get("title"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  if (!userId) {
    return {
      errors: {
        _form: ["Log in to add task"],
      },
    };
  }
  try {
    await prisma.todo.create({
      data: {
        title: result.data.title,
        authorId: userId,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [`${error}`],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something was wrong"],
        },
      };
    }
  } finally {
    revalidatePath(`/`)
  }
  return {
    errors: {},
  };
}
