import React, { useState, useEffect } from "react";
import Card from "./card";
import { fetchPosts, fetchPost } from "../../lib/devto/fetch";
import { Post } from "../../lib/devto/types";

const BlogContainer = () => {
  const [posts, setPosts] = useState<(Post & { body_markdown: string })[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        const postsWithMarkdownPromises = fetchedPosts.map(async (post: Post) => {
          const postDetails = await fetchPost(post.slug);
          return { ...post, body_markdown: postDetails.body_markdown };
        });
        const fetchedPostsWithMarkdown = await Promise.all(postsWithMarkdownPromises);
        setPosts(fetchedPostsWithMarkdown);
      } catch (err) {
        setError("Failed to fetch posts");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="hero min-w-full min-h-full flex flex-col gap-7 justify-center items-start content-start">
      {posts.map((post) => (
        <Card 
          username={post.user.username} 
          coverImage={post.cover_image}
          date={post.readable_publish_date} 
          title={post.title} 
          body_markdown={post.body_markdown} 
          key={post.id} 
        />
      ))}
    </div>
  );
};

export default BlogContainer;