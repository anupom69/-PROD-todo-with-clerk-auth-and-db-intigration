"use client";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
  varient: string;
}
export default function FormButton({ children, varient }: FormButtonProps) {
  const { pending } = useFormStatus();
  if (varient == "light") {
    return (
      <Button size="sm" variant="light" type="submit" isLoading={pending}>
        {children}
      </Button>
    );
  } 
  return (
    <Button size="sm" variant="flat" type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
