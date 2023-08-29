"use client";

import LandingPage from "@/components/home/LandingPage";
import { useGlobal } from "@/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated } = useGlobal();
  
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated]);

  return <LandingPage />;
}
