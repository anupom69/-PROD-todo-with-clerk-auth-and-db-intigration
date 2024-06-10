import { SignIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  const { userId } = auth();
  let option: React.ReactNode;
  if (userId) {
    option = <UserButton />;
  } else {
    option = <Link className="px-2 py-1 bg-white rounded-md text-black font-extrabold hover:scale-95 hover:font-extrabold transition-all" href={`/sign-in`}>Sign In</Link>;
  }
  return (
    <Navbar className="bg-gradient-to-r from-black to-gray-900 text-white">
      <NavbarBrand className="uppercase font-bold text-xl">
        <Link href={`/`}>Todo App</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        {option}
      </NavbarContent>
    </Navbar>
  );
}
