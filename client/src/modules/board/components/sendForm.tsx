import React from "react";
import styled from "styled-components";

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

type Props = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SendForm = ({ handleSubmit }: Props) => {
  return (
    <Form
      id="form"
      encType="multipart/form-data"
      name="messageForm"
      // ref="messageForm"
      onSubmit={handleSubmit}
      //accept="image/png, image/jpeg"
    >
      <textarea name="message" id="message" />
      <input
        type="file"
        name="fileInput"
        id="fileInput"
        accept="image/png, image/jpeg"
      />
      <input type="submit" value="Send" />
    </Form>
  );
};

export default SendForm;
