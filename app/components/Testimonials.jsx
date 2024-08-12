import Image from "next/image";

export default function Testimonial() {
  return (
    <div>
      <h2 className="text-2xl mt-10 ml-32 font-bold text-gray-900 ">
        What our customers say?
      </h2>
      <div className="flex justify-center">
        <section>
          <div className="flex my-10 items-center">
            <Image
              src="/images/person.png"
              height={280}
              width={140}
              className="md:w-36 md:h-36 z-20"
            />
            <div className="flex-col ring-1 py-24 relative shadow-xl ring-sky-400 mt-4 px-20 w-[900px] h-[300px] -ml-[70px] z-0 bg-white rounded-lg">
              <div className="flex items-center text-yellow-400 justify-end">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995h5.262c.97 0 1.371 1.24.588 1.81l-4.253 3.104 1.618 4.995c.3.921-.755 1.688-1.539 1.217L10 15.347l-4.253 3.104c-.784.571-1.838-.296-1.539-1.217l1.618-4.995L1.573 9.732c-.784-.571-.382-1.81.588-1.81h5.262L9.049 2.927z"></path>
                  </svg>
                ))}
                <svg
                  className="w-5 h-5"
                  fill="gray"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.995h5.262c.97 0 1.371 1.24.588 1.81l-4.253 3.104 1.618 4.995c.3.921-.755 1.688-1.539 1.217L10 15.347l-4.253 3.104c-.784.571-1.838-.296-1.539-1.217l1.618-4.995L1.573 9.732c-.784-.571-.382-1.81.588-1.81h5.262L9.049 2.927z"></path>
                </svg>
              </div>
              <div className="flex flex-initial size-4 ">
                <Image
                  src="/icons/colon.png"
                  alt="colon"
                  height={280}
                  width={140}
                />
              </div>
              <p className="text-lg italic text-gray-900 mt-1">
                "I am proud to say that after a few months of taking this
                course... I passed my exam and am now an AWS Certified Cloud
                Practitioner!"
              </p>
              <p className="mt-2 text-[20px] font-bold text-gray-900">
                - Nia Kyle
              </p>
            </div>
            <div className="bg-[#17A8FC] ring-1 ring-sky-400 mt-4  w-[80px] h-[300px] -ml-[50px] z-10  rounded-r-lg hover:bg-blue-600">
              <div className="size-8 my-32 mx-6">
                {" "}
                <Image
                  src="/icons/next.png"
                  alt="nextbtn"
                  height={280}
                  width={140}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
