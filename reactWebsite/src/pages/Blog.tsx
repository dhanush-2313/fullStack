import { Fullblog } from "../components/FullBlog";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Blog = () => {
  const { id } = useParams();


  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Simulate fetching blog data
        setBlog({ id, title: "Sample Blog", content: "This is a sample blog post." });
      } catch (error) {
        console.error("Failed to fetch blog", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);
  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-t-transparent rounded-full"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Fullblog blog={blog} />
    </div>
  );
};