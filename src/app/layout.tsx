"use client";
import { useState } from "react";
import Sidebar from "./dashboard/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex transition-all">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className={`flex-1 p-6 transition-all ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
