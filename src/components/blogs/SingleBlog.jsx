import React from "react";
import "./blog.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { fetchApi } from "../../api/blogApi";
import { useParams } from "react-router-dom";

const backendUrl= import.meta.env.VITE_APP_BACKEND_URL

function SingleBlogPage() {
  const { id } = useParams();

  const [blog, setBlog] = React.useState(null);

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetchApi(`/blogs/${id}`);
        console.log(response)
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  // Function to extract plain text from HTML for meta description
  const extractTextFromHTML = (html) => {
    if (!html) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
    return text.substring(0, 160) + (text.length > 160 ? '...' : '');
  };

  // Format ISO date for structured data
  const formatISODate = (isoString) => {
    return isoString ? new Date(isoString).toISOString() : null;
  };

  function formatDate(isoString, formatType = 'long') {
    const date = new Date(isoString);

    const options = {
        long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true },
        short: { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true },
        numeric: { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true }
    };

    return date.toLocaleString('en-US', options[formatType]);
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (<>
    {/* Dynamic SEO Component for blog post */}
  
    <div className="blog-container">
      <div className="singleBlog">
        <div className="blog-main-image">
          <img
            src={backendUrl +'/'+ blog.image1}
            alt="Processor War Image"
          />
        </div>
        <div className="blog-header">
          <h1 className="blog-title">
            {blog.title}
          </h1>
          <p className="blog-date">{formatDate(blog.updatedAt,"short")}</p>
          <hr className="separator" />
        </div>

        {/* Blog content with inline dangerouslySetInnerHTML */}
        <div
          className="blog-main-body"
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
        {blog.image2 && (
          <div className="optional-images">
            <figure className="optional-images">
              <img
                src={`${backendUrl}/${blog.image2}`}
                alt="Tech industry shift"
              />
              <figcaption>{blog.imageDesc2}</figcaption>
            </figure>
          </div>
        )}


        <div className="blog-list">
          <h3 className="list-heading">{blog.listTitle}</h3>
          <div className="list-items"  >
            <ul>
              {blog.list.map((item, index) => (
                <li key={index}
                dangerouslySetInnerHTML={{
                  __html: `${item}`,
                }} />
              ))}
            </ul>
          </div>
        </div>

        <div className="optional-images">
          <figure>
            <img
              src={`${backendUrl}/${blog.image3}`}
              alt="AI processor"
            />
            <figcaption>{blog.imageDesc3}</figcaption>
          </figure>
        </div>

        {/* More blog content with inline dangerouslySetInnerHTML */}
        <div
          className="blog-para"
          dangerouslySetInnerHTML={{
            __html: `${blog.paragraph}`,
          }}
        />
      </div>
      <div className="card-container">
        {/* <h1>Comments</h1> */}
        <Card
          sx={{
            maxWidth: 345,
            // boxShadow: 3,
            borderRadius: 2,
            // marginTop: "50px",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://www.frontendmag.com/wp-content/uploads/2022/12/how-to-learn-react-js-quickly.jpeg"
            alt="Blog Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Blog
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Read More
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: 3,
            borderRadius: 2,
            marginTop: "50px",
            alignItems: "center"
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image="https://www.frontendmag.com/wp-content/uploads/2022/12/how-to-learn-react-js-quickly.jpeg"
            alt="Blog Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React Blog
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Read More
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
   
    </>
  );
}

export default SingleBlogPage;

function formatDate(isoString, formatType = 'long') {
  const date = new Date(isoString);

  const options = {
      long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true },
      short: { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true },
      numeric: { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true }
  };

  return date.toLocaleString('en-US', options[formatType]);
}

