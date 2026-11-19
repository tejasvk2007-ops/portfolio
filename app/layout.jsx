import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { profile } from "../data/portfolio";

export const metadata = {
  title: `${profile.name} — Portfolio`,
  description: `Personal portfolio of ${profile.name}, 3rd semester engineering student. Projects, skills, experience and achievements.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        <main>
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
