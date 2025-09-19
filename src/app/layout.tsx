import Navbar from "@/component/organism/Navbar";
import "./../css/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="h-5"></div>
        {children}
      </body>
    </html>
  );
}
