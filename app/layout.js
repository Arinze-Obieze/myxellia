import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/Nav";



export const metadata = {
  title: "myxellia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
