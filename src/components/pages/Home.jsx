import React from "react";
import LatestCropPost from "./LatestCropPost";
import HowItWorks from "./HowItWorks";
import AgroBlog from "./AgroBlog";
import FarmersTestimonials from "./FarmersTestimonials";
import FeaturedCrop from "./FeaturedCrop";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
      <LatestCropPost></LatestCropPost>
      <HowItWorks></HowItWorks>
      <AgroBlog></AgroBlog>
      <FarmersTestimonials></FarmersTestimonials>
      <FeaturedCrop></FeaturedCrop>
    </div>
  );
};

export default Home;
