import React from "react";
import { Card, CardMedia, CardContent, Typography, Avatar, Grid, Button, Box } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { backendUrl } from "../../variables";
import { Link } from "react-router-dom";
const backendUrl= import.meta.env.VITE_APP_BACKEND_URL
const PostCard = ({ _id, image1, title, body, author = "Admin", role = "CA" }) => {
  
  return (
    <Grid item size={{ xs: 12, md: 4 }} sx={{ px: { xs: 0, md: 2 } }}>
      <Card elevation={3} sx={{ mb: 4, height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={`${backendUrl}/${image1}`}
          alt={title}
          sx={{ maxWidth: "100%" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" gutterBottom color="#243E63" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body && body.slice(0, 150)} [...]
          </Typography>
          <Grid container alignItems="center" spacing={2} wrap="nowrap" sx={{ mt: 2 }}>
            <Grid item>
              <Avatar
                src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80${Math.floor(
                  Math.random() * 70
                )}`}
                alt={author}
                sx={{ width: 40, height: 40 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="strong">
                {author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {role}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
          <Link to={`/blogs/${_id}`} >
          <Button variant="outlined" color="primary">Read More</Button>
          </Link>
        </Box>
      </Card>
    </Grid>
  );
};

export default PostCard;
