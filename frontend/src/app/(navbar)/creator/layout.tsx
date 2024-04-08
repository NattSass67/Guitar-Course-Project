"use client";
import "@/app/globals.css";
import { useAppSelector } from "@/sessions/store";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isAllowed = useAppSelector((state) => state.mySession.user?.creator);

  if (!isAllowed) {
    return <div className="flex justify-center text-2xl bg-gray-400">Please contact admin for receiving creator validation.</div>;
  }

  return <div>{children}</div>;
}
