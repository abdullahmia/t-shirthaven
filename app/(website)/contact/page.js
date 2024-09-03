import Image from "next/image";
import ContactForm from "./components/contact-form";

export default function Contact() {
  return (
    <div className="h-full container flex items-center justify-between">
      <div className="w-full">
        <Image src="/assets/images/contact.png" width={500} height={200} alt="Contact " />
      </div>
      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}
