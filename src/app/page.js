"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/Login"); // Change to your desired path
    }, 5000);

    return () => clearTimeout(timeout); // Clean up
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image src="/logo.png" width={100} height={100} alt="Logo" />
    </div>
  );
}
