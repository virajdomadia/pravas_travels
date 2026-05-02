"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import StickyWhatsApp from "./StickyWhatsApp";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main className={isAdmin ? "" : "flex-grow pt-16"}>
        {children}
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <StickyWhatsApp />}
    </>
  );
}
