import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" height={170} width={170} alt="Logo" />
    </Link>
  );
}
