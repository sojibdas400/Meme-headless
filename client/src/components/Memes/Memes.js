import React from "react";
import { useSelector } from "react-redux";
import SingleMeme from "./SingleMeme/singleMeme";
import useStyles from "./styles";
const Memes = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      <h1>Memes</h1>;
      <SingleMeme />
      <SingleMeme />
      <SingleMeme />
    </>
  );
};

export default Memes;
