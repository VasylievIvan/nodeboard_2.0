import React, { useEffect, useState } from "react";
import { createGlobalStyle, styled } from "styled-components";
import Board from "./modules/board/pages/board";

const GlobalStyle = createGlobalStyle`
  * {
	font-family: 'Ubuntu', sans-serif;
}

`;

type Post = {
  id: number;
  timeStamp: string;
  message: string;
  imageUrl: string;
};

const Header = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  color: #444;
`;

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
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
    <div className="App">
      <Header>ЧЯ.т</Header>
      <Board />
      <GlobalStyle />
    </div>
  );
}

export default App;
