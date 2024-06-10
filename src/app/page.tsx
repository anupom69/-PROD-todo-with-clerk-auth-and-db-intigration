import TodoContainer from "@/components/TodoContainer";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@nextui-org/react";

export default function Homepage() {
  const {userId} = auth()
  return (
    <div className="px-5 py-3">
      <h2 className="text-xl font-semibold mb-3">Todo List</h2>
      <TodoContainer userId={userId}/>
    </div>
  )
}