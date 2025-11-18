import React from "react";
import LatestCropPost from "./LatestCropPost";
import HowItWorks from "./HowItWorks";
import AgroBlog from "./AgroBlog";
import FarmersTestimonials from "./FarmersTestimonials";
import FeaturedCrop from "./FeaturedCrop";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <LatestCropPost></LatestCropPost>
      <HowItWorks></HowItWorks>
      <AgroBlog></AgroBlog>
      <FarmersTestimonials></FarmersTestimonials>
      <FeaturedCrop></FeaturedCrop>
    </div>
  );
};

export default Home;
