// import React from 'react';
import Link from "next/link";
// import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="w-full m-10 flex flex-col items-start justify-center  h-full">
      <div className="flex items-start">
        <h1 className="font-bold  text-xl mb-8">What our customers say</h1>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="bg-white mx-auto w-4/5 sm:mx-10 border border-blue-400 md:mx-20 lg:mx-32 xl:mx-48 h-auto md:h-80 my-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 mb-4 md:mb-0  md:-ml-[100px]">
            <img
              src="/images/person.png"
              alt="User avatar"
              className="h-[200px] w-[200px] rounded-full"
            />
          </div>
          <div className="ml-0 md:ml-6 text-center flex flex-col  md:text-left">
            <div className="flex flex-row justify-between w-full  ">
              <div className="pt-6">
                <img src="/icons/colon.png" alt="colons" className="w-8 h-6  mx-3"  />
              </div>
              <div className="md:flex-row pb-8 pr-4">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-gray-400 text-lg">★</span>
              </div>
            </div>
            <p className="mt-2 px-12 text-xl text-gray-600 ">
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </p>
            <div className="text-xl font-bold mt-10 pl-12">-Nia Kyle</div>
          </div>
          <button className="bg-blue-400 h-full  hidden my-8 rounded-xl md:rounded-none sm:flex justify-center items-center w-40 hover:bg-blue-600 shadow-xl">
            <img src="/icons/next.png" alt="arrow" className="h-8 w-8" />
          </button>
          <button className=" bg-blue-400 rounded-xl w-[70px] h-[30px] my-8 flex items-center justify-center hover:bg-blue-600 sm:hidden">
            <img src="/icons/next.png" alt="arrow" className="sm:hidden h-3"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
