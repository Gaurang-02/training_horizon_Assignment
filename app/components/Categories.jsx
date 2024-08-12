const categories = [
  { name: "Education", image: "/images/education.png" },
  { name: "Sports", image: "/images/sports.png" },
  { name: "Dance", image: "/images/dance.png" },
  { name: "Music", image: "/images/music.png" },
  { name: "Boxing", image: "/images/boxing.png" },
  { name: "Cycling", image: "/images/cycling.png" },
  { name: "Gymnastics", image: "/images/gymnastic.png" },
  { name: "Athletics", image: "/images/athletics.png" },
  { name: "Swimming", image: "/images/swimming.png" },
  { name: "Martial Arts", image: "/images/martial_arts.png" },

  // Add the rest of the categories here...
];

const Categories = () => {
  return (
    <section className="py-12">
      <div className="flex justify-between px-20">
      <h2 className=" text-2xl font-bold mb-8">Our Top Categories</h2>
        <button className="text-blue-400 text-xl hover:underline">View all</button>
      </div>
      <div className="grid grid-cols-2 px-20 md:grid-cols-5 gap-4 0  ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center p-4 border rounded-xl shadow-lg  hover:shadow-2xl"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-28 h-36 mx-auto mb-4 "
            />
            <h3 className="font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

// import Link from "next/link";
// import Dropdown from "./secNxt/Dropdown";
// import Card from "./secNxt/Card";

// const courses = [
//   {
//     title: "Cricket",
//     category: "Sports",
//     gender: "Boys and Girls",
//     description: "Learn the basics of cricket...",
//     imageUrl: "/images/cricket.png",
//     time: "8:00 PM to 9:30 PM",
//   },
//   {
//     title: "Basketball",
//     category: "Sports",
//     gender: "Boys Only",
//     description: "Master the skills of basketball...",
//     imageUrl: "/images/basketball.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Football",
//     category: "Sports",
//     gender: "Boys Only",
//     description: "Kick-start your football career...",
//     imageUrl: "/images/football.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Badminton",
//     category: "Sports",
//     gender: "Boys and Girls",
//     description: "Learn to smash the shuttle...",
//     imageUrl: "images//badminton.png",
//     time: "2 hrs",
//   },
//   {
//     title: "Mathematics",
//     category: "Educational",
//     gender: "Boys and Girls",
//     description: "Ace the formulas ",
//     imageUrl: "/images/math.png",
//     time: "8:00 PM to 9:30 PM",
//   },
//   {
//     title: "Science",
//     category: "Educational",
//     gender: "Boys and Girls",
//     description: "Ace the formulas ",
//     imageUrl: "/images/lab.png",
//     time: "2 hrs",
//   },
//   {
//     title: "History",
//     category: "Educational",
//     gender: "Boys",
//     description: "Ace the formulas ",
//     imageUrl: "/images/history.png",
//     time: "2 hrs",
//   },
//   {
//     title: "History",
//     category: "Educational",
//     gender: "Boys",
//     description: "Ace the formulas ",
//     imageUrl: "/images/history.png",
//     time: "2 hrs",
//   },
// ];

// const sportsCourse = courses.filter((course) => course.category == "Sports");
// const educationalCourse = courses.filter(
//   (course) => course.category == "Educational"
// );

// const Categories = () => {
//   return (
//     <div>
//       <div className="w-full flex container mx-auto py-6">
//         <h2 className="text-2xl font-bold mb-4 ">Our Best Courses</h2>
//         <div className="gap-4 w-auto flex-grow flex justify-end ">
//           <Dropdown
//             label="Select Category"
//             options={["Sports", "Arts", "Music"]}
//           />
//           <Dropdown label="Gender" options={["Boys", "Girls"]} />
//         </div>
//       </div>
//       <div className="flex container mx-auto">
//         <h1 className=" text-base font-bold">Sports</h1>
//         <Link href={"/"} className="flexEnd w-full text-sky-400 justify-end">
//           View All
//         </Link>
//       </div>
//       <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {sportsCourse.map((course, index) => (
//           <Card key={index} {...course} />
//         ))}
//       </div>
//       <div className="flex container mx-auto">
//         <h1 className=" text-base font-bold">Educational</h1>
//         <Link href={"/"} className="flexEnd w-full text-sky-400">
//           View All
//         </Link>
//       </div>
//       <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {educationalCourse.map((course, index) => (
//           <Card key={index} {...course} />
//         ))}
//       </div>
//       <div className="flex container mx-auto">
//         <h1 className=" text-base font-bold">Educational</h1>
//         <Link href={"/"} className="flexEnd w-full text-sky-400">
//           View All
//         </Link>
//       </div>
//       <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {educationalCourse.map((course, index) => (
//           <Card key={index} {...course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;
