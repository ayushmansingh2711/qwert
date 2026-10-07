
import Post from "./Post";
import PopularPosts from "./PopularPosts";
import RecentPosts from "./RecentPosts";
import Grid from "@mui/material/Grid";
import { Container, Typography ,Box, Button } from "@mui/material";
import Loader from "./Loader";
import useSWR from "swr";
import { startTransition, useState } from "react";
import { fetchWithPagination } from "../../api/blogApi";


function BlogPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const fetcher = async (url) => {
    const { data, total } = await fetchWithPagination(url, page, itemsPerPage);
    return { data, total };
  };
  
  const { data, error ,isValidating } = useSWR(
    `/blogs?page=${page}&limit=${itemsPerPage}`, // Unique key for each page
    fetcher,{
      keepPreviousData: true, // Keep old data while fetching new data
    }
  );
  const totalPages = data?.data?.totalBlogs
  
  // Handle page navigation
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };
  
  if (error) return <p>Error: {error.message}</p>;
  if (!data) {    
    return <>
     
    <p>Loading...</p>
    <Loader/>
   
    </>
    }
  // console.log(data.data)
  return (
    <>
    
      
      <Post {...data?.data?.data[0]} />
      <Container className="container-fluid py-5">
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 12 }}>
            <PopularPosts posts={data?.data.data >= 9 ? data?.data?.data.slice(1,9): data?.data?.data} />
          </Grid>
          {/* <Grid item sx={{ display: { xs: "none", md: "block" } }}
           size={{ xs: 12, md: 4 }}>
            {
              data.data.data.length <= 9 ?
              <Typography variant="h2" textAlign={'center'} >No Recent Posts</Typography> : 
              <RecentPosts posts={data.data.data.slice(9)} />
            }
          </Grid> */}
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 4 }}>
      <Button variant="contained" color="primary" onClick={handlePrevious}>
        Previous Page
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next Page
      </Button>
    </Box>
     
    </>
  );
}

export default BlogPage;
