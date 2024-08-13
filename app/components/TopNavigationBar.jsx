import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative bg-[#f1f3f4]">
      {/* Background Image
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/images/background-image.png')` }}
      ></div> */}
    

      {/* Navbar */}
      <div className="relative z-10 flex justify-between items-center p-5 bg-white shadow-md md:w-full">
        <div className="text-xl font-bold "></div>
        
        <nav className='hidden sm:block mx-auto'>
          <ul className="flex space-x-16 justify-center">
            <li>
              <a href="#" className="text-black hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:underline">
                Contact
              </a>
            </li>
            {/* <li>
              <a href="#" className="text-black hover:underline">
                Join as teacher
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="flex md:space-x-8 justify-evenly">

          <button className="text-black hover:underline hidden sm:block mx-auto">Join as teacher</button>
          <button className="text-black hover:underline hidden sm:block mx-auto">Log in</button>
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
