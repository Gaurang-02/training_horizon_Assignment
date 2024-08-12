const courses = [
  {
    id: 1,
    title: "Mathematics",
    grade: "Grade 7",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
    imgSrc: "/images/mathematics.png",
    btnText: "Learn Mathematics with best Teachers",
    handicappedLabel: "Handicapped",
  },
  {
    id: 2,
    title: "Science",
    grade: "Grade 7",
    description:
      "Get course completion certificate and prizes for 7 grade students participate now.",
    imgSrc: "/images/science.png",
    btnText: "Learn Science with best Teachers",
    handicappedLabel: "Handicapped",
  },
  // Add more course objects as needed
];

import Image from "next/image";

const FeaturedCourses = () => {
  return (
    <section className="bg-black m-8 ">
      <div
        className=" mx-auto text-center bg-left-bottom bg-center bg-white bg-no-repeat py-12 my-10 md:w-fit"
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: "62rem",
          backgroundPosition: "right",
        }}
      >
        <div className="flex p-12">
          <div className="w-56 ">
            <Image src="/images/trophy.png" alt="image" height={170} width={170} />
          </div>
          <div className="flex flex-col ml-10 items-start">
            <h2 className="text-3xl font-bold mb-3 ">
              Summer bummer vacations
            </h2>
            <p className="text-gray-600 mb-10">
              Some recent classes and webinars near your location.
            </p>
            <button className="bg-[#17A8FC] text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-2xl mb-10">
              Learn Mathematics with best Teachers
            </button>
          </div>
        </div>

        <div className="flex md:w-fit">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center m-12 bg-[#FFFFFF] border-[0.25rem] border-solid border-[#E4E4E4] hover:shadow-xl rounded-2xl "
            >
              <div className="h-[10rem] w-[1rem] bg-[#17A8FC] rounded-r-2xl"></div>
              <div className="p-2 ">
                <Image src={course.imgSrc} alt={`${course.title}-Icon`}  height={170} width={170}/>
              </div>
              <div className="p-5 ">
                <div className="pt-2 pb-5">
                  <button
                    type="button"
                    className="flex items-center w-[8rem] h-[1.75rem] text-white text-[0.75rem] font-inter bg-[#17A8FC] hover:bg-[#49b6f6] border-[#113448] rounded-3xl "
                  >
                    <Image src="/icons/handicap.png" alt="" className="p-2" height={170} width={170} />
                    {course.handicappedLabel}
                  </button>
                  <div className="flex justify-between">
                    <h1 className="p-1 font-inter font-bold text-2xl">
                      {course.title}
                    </h1>
                    <h1 className="p-1 font-inter font-medium text-1xl text-[#03203199]">
                      {course.grade}
                    </h1>
                  </div>
                  <h6 className="p-1 font-inter font-medium text-[0.85rem] text-start">
                    {course.description}
                  </h6>
                </div>
                <button
                  type="button"
                  className="w-[24rem] h-[2.5rem] text-white font-normal font-inter bg-[#17A8FC] hover:bg-blue-600 border-[#113448] rounded-lg "
                >
                  {course.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
