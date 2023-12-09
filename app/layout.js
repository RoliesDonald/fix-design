import { Roboto_Condensed } from "next/font/google";
import "./ui/globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// const inter = Inter({
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Bung Mekanik Power Dashboard",
  description: "Power Dashboard build with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
