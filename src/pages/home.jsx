// import Herosection from "../Sections/HomeSection/Herosection";
import HeroBanner from "../Sections/Herobanner/HeroBanner.jsx";
import Category2 from "../Sections/HomeSection/CategorySection/Category.jsx";
import CareerPathSection from "../Sections/CareerPath/CareerPathSection.jsx";
import OurImpact from "../Sections/Impact/Ourimpact.jsx";
import ScrollingBanner from "../Sections/Scrolling-Banner/BannnerScrolling.jsx";
import CourseSection from "../Sections/Feature/FeatureStats.jsx";
import ScrollingContainer from '../Sections/ScrollingContainer/Scrollingdiv.jsx'
import CommunitySection from "../Sections/Community/CommunitySections.jsx";
import ResourcesSection from "../Sections/MoreAbout/index.jsx";
import MentorPartnerSection from "../Sections/MentorPartner/PartnerMentor.jsx";
import TrainingPlacementSection from "../Sections/training/placement.jsx";
// import Featured from "../Sections/HomeSection/NewArrival/Featured.jsx";
const Home = () => {
  // const { name, HomeHeroSection } = useAppContext();
  return (
    <>
    <HeroBanner />
    <CareerPathSection />
    <OurImpact />
    <ScrollingBanner />
    <CourseSection />
    <ScrollingContainer />
    <CommunitySection />
    <TrainingPlacementSection />
    <MentorPartnerSection />
    <ResourcesSection />
    {/* <Herosection /> */}
    {/* <Products /> */}
    {/* <Featured /> */}
    {/* <FeatureHighlight /> */}
    <Category2 />
    </>
  )
};

export default Home;
