import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white flex flex-col h-full">
      <div className="flex-grow px-4 m-8 h-full flex flex-col justify-between md:flex-row items-center">
        <div className="flex flex-col m-5">
          <div className="flex flex-wrap items-center md:items-start">
            <Image
              src="/images/logo.png"
              alt="Training Horizons Logo"
              className="w-16 h-16 mb-2"
              height={360}
              width={360}
            />
            <h2 className="text-lg ml-2 font-semibold">
              TRAINING <br /> HORIZONS
            </h2>
          </div>
          <p className="text-gray-600 ml-5">Offline Batches and classes</p>
        </div>

        <div className="flex flex-col justify-evenly h-full m-5 text-center md:text-left">
          <h3 className="font-bold text-gray-800">ABOUT US</h3>
          <Link href={"/"} className="text-gray-400 mt-6">
            Who we are
          </Link>
          <Link href={"/"} className="text-gray-400 mt-6">
            Work with us
          </Link>
        </div>

        <div className="flex flex-col justify-evenly h-full m-5 text-center md:text-left">
          <h3 className="font-bold text-gray-800 ">EXPLORE</h3>
          <Link href={"/"} className="text-gray-400 mt-6">
            Batches and Classes
          </Link>
          <Link href={"/"} className="text-gray-400 mt-6">
            Community
          </Link>
        </div>

        <div className="flex flex-col justify-evenly h-full m-5 text-center md:text-left">
          <h3 className="font-bold text-gray-800 ">LEGAL</h3>
          <Link href={"/"} className="text-gray-400 mt-6">
            Privacy policy
          </Link>
          <Link href={"/"} className="text-gray-400 mt-6">
            Terms & conditions
          </Link>
        </div>

        <div className="flex flex-col items-center h-full justify-evenly text-center m-5">
          <h3 className="font-bold text-gray-800 ">CONTACT</h3>
          <div className="flex flex-row items-center mt-6">
            <Image
              src="/contact/call.png"
              alt="phone"
              // className="h-[14px] w-[14px]"
              height={14}
              width={14}
            />
            <span className="text-gray-400 flex-col ">+922323092928</span>
          </div>
          <div className="flex flex-row justify-evenly m-2 space-x-8 mt-6">
            <Image
              src="/contact/frame-1.png"
              alt="instagram"
              height={12}
              width={24}
            />
            <Image
              src="/contact/frame-2.png"
              alt="instagram"
              height={12}
              width={24}
            />
            <Image
              src="/contact/frame-3.png"
              alt="instagram"
              height={12}
              width={24}
            />
            <Image
              src="/contact/frame.png"
              alt="instagram"
              height={12}
              width={24}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 mt-2">
        <p className="text-center text-gray-600">© 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
}
