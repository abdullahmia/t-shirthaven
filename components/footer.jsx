import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container responsive">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 py-20">
        <div className="space-y-3">
          <Image
            src={"/assets/images/logo-light.png"}
            height={200}
            width={200}
            alt="Logo"
          />
          <p className="text-sm text-secondary">
            Fahio is a ecommerce app for practical project-based learning.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link href={"/"}>
              <Instagram color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <Facebook color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <LinkedinIcon color="#5c5f6a" size={20} />
            </Link>
            <Link href={"/"}>
              <Twitter color="#5c5f6a" size={20} />
            </Link>
          </div>
        </div>

        <div className="space-y-6 lg:ms-20 ms-0">
          <h3 className="text-md text-[#878A92] font-light uppercase">
            support
          </h3>

          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-sm text-secondary  ">
              FAQ
            </Link>
            <Link href={"/"} className="text-sm text-secondary  ">
              Terms of use
            </Link>
            <Link href={"/"} className="text-sm text-secondary  ">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="space-y-6 lg:ms-20 ms-0">
          <h3 className="text-md text-[#878A92] font-light uppercase">
            COMPANY
          </h3>

          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-sm text-secondary">
              About us
            </Link>
            <Link href={"/"} className="text-sm text-secondary">
              Contact
            </Link>
            <Link href={"/"} className="text-sm text-secondary">
              Careers
            </Link>
          </div>
        </div>

        <div className="space-y-6 lg:ms-20 ms-0">
          <h3 className="text-md text-[#878A92] font-light uppercase">SHOP</h3>

          <div className="flex flex-col gap-2">
            <Link href={"/"} className="text-sm text-secondary  ">
              My Account
            </Link>
            <Link href={"/"} className="text-sm text-secondary  ">
              Checkout
            </Link>

            <Link href={"/"} className="text-sm text-secondary  ">
              Cart
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md text-[#878A92] font-light uppercase">
            ACCEPTED PAYMENTS
          </h3>

          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/mastercard.png"
              width={40}
              height={40}
              alt="mastercard"
            />
            <Image
              src="/assets/images/amex.png"
              width={60}
              height={60}
              alt="mastercard"
            />
            <Image
              src="/assets/images/visa.png"
              width={50}
              height={50}
              alt="mastercard"
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p className="text-center text-sm text-secondary py-4">
          &copy; {new Date().getFullYear()} Fahio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
