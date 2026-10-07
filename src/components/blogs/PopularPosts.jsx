import React from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./BlogCard";
import Typography from "@mui/material/Typography";

const PopularPosts = ({posts}) => {  

  return (
    <div className="populor">
      <Typography variant="h2" className="mb-4">
        Popular Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item size={{ xs: 12, md: 4 }} key={index}>
            <PostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PopularPosts;
