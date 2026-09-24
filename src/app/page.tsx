import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CirclePoundSterlingIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance",
  description: "Your Personal Finance Assistant",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <CirclePoundSterlingIcon className="text-primary size-15" />
      <h1 className="text-primary text-4xl font-bold">Welcome to Fina</h1>
      <p className="text-lg mt-2">Your Personal Finance Assistant</p>
      <Link href="/dashboard">
        <Button className="mt-2" size="lg">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
