import React from "react";
import { Header } from "../../Components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-wrapper">
      <Header />
      <div className="mt-10">{children}</div>
    </div>
  );
}
