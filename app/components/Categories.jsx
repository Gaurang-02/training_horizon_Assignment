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

import Image from "next/image";

const Categories = () => {
  return (
    <section className="container mx-auto  w-full py-5 px-6">
      <div className="flex flex-wrap justify-between">
      <h2 className=" text-2xl font-bold mb-8">Our Top Categories</h2>
        <button className="text-blue-400 text-xl hover:underline">View all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl "
          >
            <Image
              src={category.image}
              alt={category.name}
              className="w-28 h-36 mx-auto mb-4 "
              height={180}
              width={180}
            />
            <h3 className="font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
