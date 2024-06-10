import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto h-screen grid place-items-center">
      <SignIn />
    </div>
  );
}
