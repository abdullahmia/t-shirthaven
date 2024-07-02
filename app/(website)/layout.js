import Footer from "@/components/footer";
import Header from "@/components/header";

export default function WebsiteLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
