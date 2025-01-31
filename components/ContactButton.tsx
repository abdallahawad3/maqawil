import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Button className="w-full !py-6">
      <Link href="https://api.whatsapp.com/send?phone=9660569088789" target="_blank">
        تواصل معنا الآن
      </Link>
    </Button>
  );
};

export default ContactButton;
