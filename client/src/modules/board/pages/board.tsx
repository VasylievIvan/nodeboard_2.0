import React, { useEffect, useState } from "react";
import Post from "../components/post";
import styled from "styled-components";

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

const Form = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  & > input {
    height: 30px;
  }

  & > textarea {
    min-height: 80px;
    min-width: 350px;
  }
  & > input[type="submit"] {
    height: 36px;
    width: 120px;
    background: none;
    box-shadow: none;
    outline: 0;
    border: 1px solid black;
  }
  & > input[type="button"] {
    height: 35px;
    width: 120px;
    background: none;
    box-shadow: none;
    outline: 0;
    border: 1px solid black;
  }
`;

function Board() {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    try {
      fetch("http://localhost:3001/api/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <Posts>
        <Link href="#form">Вниз</Link>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Posts>
      <Form
        id="form"
        // enctype="multipart/form-data"
        // ref="messageForm"
        onSubmit={() => {}}
        //accept="image/png, image/jpeg"
      >
        <textarea value={"this.state.value1"} onChange={() => {}} />
        <input type="file" name="fileInput" id="fileInput" />
        <input type="submit" value="Send" />
      </Form>
    </div>
  );
}

export default Board;
