import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom";


const backendUrl= import.meta.env.VITE_APP_BACKEND_URL


function Post({ _id, title,
  body,
  paragraph,
  listTitle, list, image1,
  image2,
  imageDesc2,
  image3,
  imageDesc3 }) {
  return (
    <Box sx={{ bgcolor: "white", color: "black", py: 5 }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item size={{ xs: 12, md: 5 }} textAlign="center">
            <img
              src={`${backendUrl}/${image1}`}
              alt="ReduceTAX"
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Expert from ReduceTax
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom>
              {title && title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              By Lokendra Tomar
            </Typography>
            <Typography variant="body1" >
              {body && body.length > 50 ? body.slice(0, 50) : body}
            </Typography>
            <Link to={`/blogs/${_id}`}>
              <Button variant="contained" color="primary">
                Read more
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Post;
