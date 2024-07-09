import AddressForm from "./components/address-form";

export const metadata = {
  title: "Shipping Address",
  description: "This is your address page. You can manage your address here.",
};

export default function Address() {
  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">
        Shipping Address
      </h2>

      <div className="mt-12 lg:w-4/6 w-full">
        <AddressForm />
      </div>
    </div>
  );
}
