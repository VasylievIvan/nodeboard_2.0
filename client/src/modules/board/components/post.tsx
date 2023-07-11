import React from "react";
import { PostType } from "../pages/board";
import styled, { css } from "styled-components";

type Props = {
  post: PostType;
};

const PostInlineWrapper = styled.div`
  display: inline-block;
  list-style: none;
  font-family: "Ubuntu", sans-serif;
  border: 1px solid #999999;
  border-radius: 3px;
  background-color: #f5f5f5;
  align-items: center;
  padding: 15px;
  padding-top: 5px;
  margin-bottom: 10px;
  min-width: 300px;
`;

const PostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  max-height: 150px;
  max-width: 150px;
  margin-top: 15px;
  min-height: 50px;
  min-width: 50px;
  ${(props: any) =>
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
  return (
    <div className="postWrapper" key={post.id}>
      <PostInlineWrapper>
        <div className="postHeader">
          <span>Аноним</span>
          <span>{post.timeStamp}</span>
          <span>№{post.id}</span>
        </div>
        <PostContent>
          {post.imageUrl != "" && (
            <div className="imageWrapper">
              <Image
                src={post.imageUrl}
                onClick={() => {
                  return null;
                }}
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
