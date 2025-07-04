import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FFF6D5]">
    <div className="flex justify-between p-10 max-w-[1440px]  m-auto">
      <div className="flex flex-col gap-4">
        <p className="text-[2.25rem] font-bold">Contact Us</p>
        <p className="text-[0.9rem] text-gray-600">
          Triyuginarayan Temple, Rudraprayag, Uttarakhand.
        </p>
        <p className="text-[0.9rem] text-gray-600">
          triyuginarayanweddingwork@gmail.com
        </p>
        <p className="text-[0.9rem] text-gray-600">+91-xxx-xxxxx </p>
      </div>
      <div className="">
        <p className="text-[2.25rem] font-bold">Follow Us</p>
        <div className="flex ">
          <p>insta</p>
          <p>insta</p>
        </div>
      </div>
      <div className="">
        <Image src={logo} alt="img" className="w-32" />
      </div>
    </div>
    </div>
  );
};

export default Footer;
