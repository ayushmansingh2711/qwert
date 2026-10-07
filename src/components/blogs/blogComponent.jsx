import React from 'react'
import useSWR from 'swr';
import { Box, Grid } from '@mui/material';
import { fetchApi } from '../../api/blogApi.js';
import PostCard from './PostCard.jsx';
import './blog.css'
function BlogComponent() {
    let { data, error } = useSWR('/blogs', fetchApi);
    // console.log(data.data.slice(3))
    if (error) return <p>Error: {error.message}</p>;
    if (!data) {
        return <p>Loading...</p>
    }
    if (data?.data?.length === 0) {
        return <p>No data found</p>
    }
    return (
        <div>
            <Grid container sx={{
                borderRadius: 2,
                maxWidth: "lg",

                mx: "auto",
                p: 3,
                mt: 2,
                //    columnGap: 2,
                //    flexWrap: { xs: "wrap", md: "nowrap" }             
            }}
            >
                <Grid item size={{ xs: 12 }} sx={{ my: 2, textAlign: "center" }}>
                    <h2 className="pricing-heading">Our Blogs</h2>
                </Grid>
                {data?.data?.slice(0, 3).map((blog) => {
                    return <PostCard key={blog._id} {...blog} />
                })}

            </Grid>
        </div >
    )
}

export default BlogComponent
