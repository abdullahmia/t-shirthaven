import Footer from "@/components/footer";
import Header from "@/components/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const session = await auth();

  if (session?.user?.email) {
    return redirect("/account");
  }

  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
