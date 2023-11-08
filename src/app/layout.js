import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Bank landing page",
  description: "anding page ",
};

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
