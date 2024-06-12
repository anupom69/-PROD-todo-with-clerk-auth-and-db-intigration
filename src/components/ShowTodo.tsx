"use client";
import { Button, Checkbox } from "@nextui-org/react";
import { TrashIcon } from "./Icons/TrashIcon";
import type { Todo } from "@prisma/client";
import { deleteTodo, updateComplete } from "@/lib/actioins";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import FormButton from "./form-submit-button";

interface ShowTodoProps {
  todo: Todo;
}
export default function ShowTodo({ todo }: ShowTodoProps) {
  const [completed, setCompleted] = useState(todo.completed);
  const updateAction = updateComplete.bind(null, {
    id: todo.id,
    completed: completed,
  });
  useEffect(() => {
    updateAction();
  }, [completed]);
  const deleteAction = deleteTodo.bind(null, todo.id)
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-between align-middle shadow-sm">
      <Checkbox
        onChange={() => setCompleted((c) => !c)}
        size="lg"
        lineThrough
        defaultSelected={todo.completed}
      >
        {todo.title}
      </Checkbox>
      <form action={deleteAction}>
        <FormButton varient="light"><TrashIcon /></FormButton>
        {/* <Button size="sm" variant="light" type="submit" isLoading={pending}>
          <TrashIcon />
        </Button> */}
      </form>
    </div>
  );
}
