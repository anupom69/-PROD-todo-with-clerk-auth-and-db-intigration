"use client";
import { createTask } from "@/lib/actioins";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import FormButton from "./form-submit-button";

export default function AddTodo({ userId }: { userId: string | null }) {
  const [formState, action] = useFormState(createTask.bind(null, userId), {
    errors: {},
  });
  const [errors, setErrors] = useState(formState.errors);
  useEffect(() => {
    setErrors(formState.errors);
  }, [formState]);
  return (
    <>
      <form action={action} className="flex">
        <Input
          className="text-lg"
          name="title"
          onChange={() => setErrors({})}
          isInvalid={!!errors.title}
          errorMessage={errors.title}
          placeholder="Add new task"
          variant="underlined"
          size="sm"
        />
        <FormButton>Add</FormButton>
      </form>
      {errors._form && <div className="-mt-4 pl-1 text-small text-[#f31260]">{errors._form}</div>}
    </>
  );
}
