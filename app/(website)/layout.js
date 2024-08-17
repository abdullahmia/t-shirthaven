import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function WebsiteLayout({ children }) {
  // await connectDB();
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
