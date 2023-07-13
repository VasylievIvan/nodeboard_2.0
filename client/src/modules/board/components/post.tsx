import React, { useState } from "react";
import { PostType } from "../pages/board";
import styled, { css } from "styled-components";
import { formatDate } from "../../../utils/date";

type Props = {
  post: PostType;
};

const PostInlineWrapper = styled.div`
  min-width: 300px;
  width: fit-content;
  list-style: none;
  font-family: "Ubuntu", sans-serif;
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: #f5f5f5;
  align-items: center;
  padding: 15px;
  padding-top: 5px;
  margin-bottom: 10px;
  max-width: 100%;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostContent = styled.div`
  max-width: 100%;
  word-break: break-word;
  word-wrap: break-word;
`;

const Image = styled.img<{
  clicked?: boolean;
}>`
  max-height: 150px;
  max-width: 150px;
  margin-top: 15px;
  min-height: 50px;
  min-width: 50px;
  ${(props) =>
    props.clicked &&
    css`
      max-height: none;
      max-width: none;
    `}
`;

const PostBody = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  white-space: pre-line;
`;

const Post = ({ post }: Props) => {
  const [imageClicked, setImageClicked] = useState(false);
  const toggleImageCkicked = () => {
    setImageClicked(!imageClicked);
  };
  const formatedDate = formatDate(new Date(post.timeStamp));
  return (
    <div className="postWrapper" key={post.id}>
      <PostInlineWrapper>
        <PostHeader>
          <span>Аноним</span>
          <span>{formatedDate}</span>
          <span>№{post.id}</span>
        </PostHeader>
        <PostContent>
          {post.imageUrl && post.imageUrl.length > 0 && (
            <div className="imageWrapper">
              <Image
                clicked={imageClicked}
                src={"http://localhost:3001/img/" + post.imageUrl}
                onClick={toggleImageCkicked}
              />
            </div>
          )}
          <PostBody
            className="post"
            onClick={() => {
              return null;
            }}
          >
            {post.message}
          </PostBody>
        </PostContent>
      </PostInlineWrapper>
    </div>
  );
};

export default Post;
