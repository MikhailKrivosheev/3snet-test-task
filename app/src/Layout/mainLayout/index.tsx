import React from "react";
import { Header } from "../../Components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-full px-[calc((100%-1440px)/2)]">
      <Header />
      <div className="mt-10">{children}</div>
    </div>
  );
}
