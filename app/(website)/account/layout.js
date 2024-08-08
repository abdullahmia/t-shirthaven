import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/services/user";
import { redirect } from "next/navigation";
import AccountSidebar from "./components/account-sidebar";
import MobileAccountSidebar from "./components/mobile-account-sidebar";

export default async function AccountLayout({ tabs }) {
  const session = await auth();

  if (session === null) {
    return redirect("/login");
  }

  const user = await getUserByEmail(session.user.email);
  if (user?.role !== "user") {
    return redirect("/admin");
  }

  return (
    <div>
      <GenerateBreadcrumb title="My Account" />
      <div className="container responsive py-20 flex flex-col md:flex-row lg:gap-14 gap-2">
        <div className="lg:w-1/4 lg:block hidden">
          <AccountSidebar />
        </div>
        <div className="w-full lg:hidden block">
          <MobileAccountSidebar />
        </div>
        <div className="lg:w-3/4">{tabs}</div>
      </div>
    </div>
  );
}
