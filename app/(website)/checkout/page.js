import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import CheckoutForm from "./components/checkout-form";

export const metadata = {
  title: "Checkout",
  description: "Checkout page",
};

export default function Checkout() {
  return (
    <div>
      <GenerateBreadcrumb title={"Checkut"} />
      <CheckoutForm />
    </div>
  );
}
