import Navbar from "@/component/organism/Navbar";
import "./../css/globals.css";
import AuthProvider from "@/component/organism/AuthProvider";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";
import {getSession } from "@/utils/session";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {    

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <Navbar />
          <div className="h-5"></div>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
