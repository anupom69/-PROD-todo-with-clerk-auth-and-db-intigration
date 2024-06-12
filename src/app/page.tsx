import TodoContainer from "@/components/TodoContainer";
import TodosFallback from "@/components/TodoContainerFallback";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default function Homepage() {
  const { userId } = auth();

  return (
    <div className="px-5 py-3">
      <h2 className="text-xl font-semibold mb-3">Todo List</h2>
      <Suspense fallback={<TodosFallback />}>
        <TodoContainer userId={userId} />
      </Suspense>
    </div>
  );
}
