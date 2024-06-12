import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto h-screen grid place-items-center">
      <SignUp />
    </div>
  );
}
