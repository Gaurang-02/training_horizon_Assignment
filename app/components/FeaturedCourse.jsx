
import Image from "next/image";

const FeaturedCourse = () => {
  return (
    <div className=" w-full px-4 mt-10 bg-gray-100">
      <div className="bg-white py-6 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: "url('/images/background.png')" }}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="flex">
            <img src='/images/trophy.png'
              className="h-40 w-40"
            />
            <div className="flex-col px-4">
              <h1 className="text-2xl font-bold text-gray-900 pt-5">Summer bummer vacations</h1>
              <p className="text-gray-600 pt-2">Some recent classes and webinar near your location.</p>
              <button className="mt-6 py-2 px-4 max-sm:text-[11px] bg-sky-400 text-white rounded hover:shadow-xl hover:bg-sky-600">Mathematics with best Teachers</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div className="flex items-center bg-white ring-2 ring-gray-10 relative shadow-xl rounded-lg">
            <div className="flex  w-2 h-3/4 bg-sky-400 absolute rounded-r-xl"></div>
              <div className="flex items-center p-6">
                <img src='/images/mathematics.png'
                  className="w-32 h-32 rounded-full" />
                <div className="flex-col px-4">
                <button
                    type="button"
                    className="flex items-center w-[8rem] h-[1.75rem] text-white text-[0.75rem] font-inter bg-[#17A8FC]  border-[#113448] rounded-3xl "
                  >
                    <Image src="/icons/handicap.png" alt="" className="p-2" height={170} width={170} />
                  </button>
                  <h2 className="text-xl pt-4 font-bold text-gray-900">Mathematics</h2>
                  <p className="mt-2 text-gray-600">Get course completion certificate and prizes for
                    7 grade students participate now.</p>
                  <button className="mt-4 px-4 py-2 max-sm:text-[11px] bg-sky-400 text-white rounded hover:shadow-xl hover:bg-sky-600">Learn Mathematics with best Teachers</button>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white ring-2 ring-gray-10 shadow-xl relative rounded-lg">
            <div className="flex  w-2 h-3/4 bg-sky-400 absolute rounded-r-xl"></div>
              <div className="flex items-center p-6">
                <img src='/images/science.png'
                  className="w-32 h-32 rounded-full" />
                <div className="flex-col px-4">
                <button
                    type="button"
                    className="flex items-center w-[8rem] h-[1.75rem] text-white text-[0.75rem] font-inter bg-[#17A8FC]  border-[#113448] rounded-3xl "
                  >
                    <Image src="/icons/handicap.png" alt="" className="p-2" height={170} width={170} />
                  </button>
                  <h2 className="text-xl pt-4 font-bold text-gray-900">Science</h2>
                  <p className="mt-2 text-gray-600">Get course completion certificate and prizes for
                    7 grade students participate now.</p>
                  <button className="mt-4 px-4 py-2 max-sm:text-[11px] bg-sky-400 text-white rounded  hover:bg-sky-600 hover:shadow-xl" >Learn Science with best Teachers</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FeaturedCourse;
