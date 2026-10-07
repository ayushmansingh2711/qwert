import React from "react";
import { Helmet } from "react-helmet";
import StoriesBanner from "../../components/sections/FlairStories/StoriesBanner";
import StoriesEvents from "../../components/sections/FlairStories/StoriesEvents";
import StoriesTestimonial1 from "../../components/sections/FlairStories/StoriesTestimonial1";
import StoriesTestimonial2 from "../../components/sections/FlairStories/StoriesTestimonial2";

const FlairStories = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flair Stories</title>
      </Helmet>
      <StoriesBanner />
      <StoriesTestimonial1 />
      <StoriesEvents />
      <StoriesTestimonial2 />
    </div>
  );
};

export default FlairStories;
