import ClientWrapper from "@/components/client-wrapper";
import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import ReduxWrapper from "@/components/redux-wrapper";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/services/user";
import { redirect } from "next/navigation";
import CheckoutForm from "./components/checkout-form";

export const metadata = {
  title: "Checkout",
  description: "Checkout page",
};

export default async function Checkout() {
  const session = await auth();

  if (!session) {
    return redirect("/login?redirect=/checkout");
  }

  const user = await getUserByEmail(session.user.email);

  return (
    <div>
      <GenerateBreadcrumb title={"Checkut"} />

      <ClientWrapper>
        <ReduxWrapper>
          <CheckoutForm currentUser={user} />
        </ReduxWrapper>
      </ClientWrapper>
    </div>
  );
}
