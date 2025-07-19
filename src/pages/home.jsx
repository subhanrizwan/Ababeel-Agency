// import Herosection from "../Sections/HomeSection/Herosection";
import HeroBanner from "../Sections/Herobanner/HeroBanner.jsx";
import Featured from "../Sections/HomeSection/NewArrival/Featured.jsx";
import Products from "../Sections/HomeSection/Products/Products.jsx"; 
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import FeatureHighlight from "../Sections/HomeSection/FetaureHighlight/FeatureHighlight.jsx";
import CareerPathSection from "../Sections/CareerPath/CareerPathSection.jsx";
// import Featured from "../Sections/HomeSection/NewArrival/Featured.jsx";
const Home = () => {
  // const { name, HomeHeroSection } = useAppContext();
  return (
    <>
    <HeroBanner />
    <CareerPathSection />
    {/* <Herosection /> */}
    <Products />
    <Featured />
    <FeatureHighlight />
    <Category2 />
    </>
  )
};

export default Home;
