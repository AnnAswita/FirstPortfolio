import  { useState } from "react";
import './Blog.css'
import type {BlogData} from "../../types/blog" //type is imported
import blogData from "../../data/blog.json" //json data file is imported

function Blog() {
  const data: BlogData = blogData as BlogData
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenPostId(openPostId === id ? null : id);
  }
  return (
<div id="blog" className="Blog">
  <div className="pageHeading"><h2>Blog</h2></div>
  <div className="blogContainer container">
    {data.posts.map((post) =>(  
      <div className="post-card card">
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        {openPostId === post.id && (
          <div className="post-content">
            <p>{post.content}</p>
          </div>
        )} {/* takes data from json file use type interface and iteratively display all the posts */}

        <button className="read-btn smallButton" onClick={() => toggleCard(post.id)}>
          {openPostId === post.id ? "Close" : "Read"}
        </button> {/* toogles button text to Close or Read */}
      </div>
    ))}
</div>
</div>
  );  
}

export default Blog;