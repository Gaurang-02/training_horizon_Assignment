import Header from './components/Header';
import TopNavigationBar from './components/TopNavigationBar';
import Categories from './components/Categories';
import FeaturedCourses from './components/FeaturedCourse';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='bg-[#f7f7f7]'>
      <TopNavigationBar />
      <Header />
      {/* <Categories /> */}
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
}
