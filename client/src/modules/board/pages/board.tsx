import React, { useEffect, useState } from "react";
import Post from "../components/post";
import styled from "styled-components";
import SendForm from "../components/sendForm";

export type PostType = {
  id: number;
  timeStamp: string;
  message: string;
  imageUrl: string;
};

const Posts = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 10px;
  list-style-position: inside;
`;

const Link = styled.a`
  color: #ff6600;
  &:hover {
    color: #0066ff;
  }
`;

function Board() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = data.get("message");
    const file = data.get("fileInput");
    //reset form

    if (message === "") {
      return;
    }
    

    fetch("http://localhost:3001/api/posts", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        fetchPosts();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Posts>
        <Link href="#form">Вниз</Link>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Posts>
      <SendForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default Board;
