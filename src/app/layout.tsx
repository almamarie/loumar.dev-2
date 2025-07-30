import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/main-layout/Header";
import SocialMedia from "@/components/ui/main-layout/SocialMedia";

export const metadata: Metadata = {
  title: "Louis Marie Atoluko Ayariga - Personal Website",
  description:
    "Louis Marie Atoluko Ayariga - Software Engineer based in Bolgatanga, Ghana. Skilled in fullstack development, AWS, and serverless technologies. Former tech fellow at the African Commission on Human and Peoples’ Rights, where I led the development of applications for human rights reporting and NGO interaction. Explore my projects and experience in software engineering, cloud development, and more.",
  icons: {
    icon: "./favicon.png", // Path relative to the public directory or app directory
    apple: "./favicon.png", // For Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" type="image/png" href="./favicon.png" /> */}
      </head>
      <body className="body">
        <Header />
        <div className="">
          <div className="">
            <SocialMedia />
          </div>
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
