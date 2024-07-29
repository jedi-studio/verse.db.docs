import React, { useState, useEffect } from "react";
import Card from "./card";
import { fetchPosts, fetchPost } from "../../lib/devto/fetch";
import { Post } from "../../lib/devto/types";
import Image from "next/image";
import Logo from "../logo";

const BlogContainer = () => {
  const [posts, setPosts] = useState<(Post & { body_markdown: string })[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        const postsWithMarkdownPromises = fetchedPosts.map(
          async (post: Post) => {
            const postDetails = await fetchPost(post.slug);
            return { ...post, body_markdown: postDetails.body_markdown };
          }
        );
        const fetchedPostsWithMarkdown = await Promise.all(
          postsWithMarkdownPromises
        );
        setPosts(fetchedPostsWithMarkdown);
        setLoading(true);
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

  if (!loading) {
    return (
      <div className="hero min-h-screen w-full">
        <div className="hero-content text-center">
          <div className="max-w-md main-text flex flex-col justify-center">
            <div className="animate-pulse">
              <Logo height={100} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero min-w-full min-h-full flex flex-col gap-7 justify-center items-start content-start">
      {posts.map((post) => (
        <Card
          username={post.user.username}
          userImage={post.user.profile_image}
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
