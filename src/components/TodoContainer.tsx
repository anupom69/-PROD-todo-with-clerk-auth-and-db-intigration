import { prisma } from "@/lib/db";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";
import { Todo } from "@prisma/client";

export default async function TodoContainer({
  userId,
}: {
  userId: string | null;
}) {
  let todos: Todo[];
  if (!userId) {
    todos = await prisma.todo.findMany({
      where: { authorId: null },
      orderBy: {updatedAt: "asc"}
    });
  } else {
    todos = await prisma.todo.findMany({
      where: { authorId: userId },
      orderBy: [
        {completed: "asc"},
        {updatedAt: "asc"}
      ]
    });
  }
  return (
    <div className="flex flex-col gap-5 container max-w-sm">
      {todos.map((todo) => (
        <ShowTodo key={todo.id} todo={todo} />
      ))}
      <AddTodo userId={userId} />
    </div>
  );
}
