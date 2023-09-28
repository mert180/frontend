import Image from "next/image";
import Link from "next/link";
import React from "react";

const TextLogo = () => {
  return (
    <Link href="/">
      <Image src="/logo-text.png" width={150} height={150} alt="a" />
    </Link>
  );
};

export default TextLogo;
