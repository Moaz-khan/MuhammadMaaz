import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/images/LOGO.png" alt="" width={300} height={300} />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 Muhammad Maaz
          </p>
        </div>
      </footer>
      ;
    </div>
  );
}

export default Footer;
