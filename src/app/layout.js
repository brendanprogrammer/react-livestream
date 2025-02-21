import Navbar from "@/components/navbar/Navbar";
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kingdom Connection Radio',
  description: "KC radio is a Christian internet radio focusing on believer's spiritual growth through worship music and faith-based materials.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
          <Navbar/>
            {children}
          <footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
