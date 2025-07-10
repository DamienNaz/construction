import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo1.png" width={80} height={15} alt="Logo" />

    </Link>
  );
};

export default Logo;
