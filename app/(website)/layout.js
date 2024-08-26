import Footer from "@/components/footer";
import Header from "@/components/header";
import { SessionProvider } from "next-auth/react";

export default async function WebsiteLayout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <SessionProvider>{children}</SessionProvider>
      </main>
      <Footer />
    </div>
  );
}
